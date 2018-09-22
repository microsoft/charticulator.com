// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as React from "react";
import * as d3 from "d3";
import * as Hammer from "hammerjs";

import { VideoView } from "./video_view";

import { TutorialCaption, TutorialMetadata } from "./data";
import { classNames } from "./utils";
import * as marked from "marked";

marked.setOptions({
    smartypants: true
});

export interface TutorialViewProps {
    tutorial: TutorialMetadata;
    width: number;
    height: number;
    initialTime?: number;
}

export interface TutorialViewState {
    currentCaptionIndex: number;
    scrollPosition: number;
    keepCurrentInView: boolean;
}

export class TutorialView extends React.Component<TutorialViewProps, TutorialViewState> {
    private videoView: VideoView;
    private captionMap: { [name: string]: CaptionView } = {};
    private svg: SVGElement;
    private gD3Elements: SVGGElement;
    private captions: HTMLDivElement;
    private captionsInner: HTMLDivElement;

    private currentWithItem: [TutorialCaption, number] = null;

    constructor(props: TutorialViewProps) {
        super(props);
        this.state = {
            scrollPosition: 0,
            currentCaptionIndex: null,
            keepCurrentInView: true
        };
    }

    public onCaptionClick(caption: TutorialCaption, index: number) {
        this.videoView.seek(caption.timeBegin);
        this.videoView.play();
        this.setState({
            currentCaptionIndex: index,
            keepCurrentInView: true
        });
    }

    public renderTimeAxis(timestamp: number, xScale: d3.ScaleLinear<number, number>) {
        return (
            <g>
                {this.props.tutorial.captions.map((caption, index) => (
                    caption.text != null ?
                        <rect
                            key={index}
                            className={classNames("el-ranges", ["is-active", this.state.currentCaptionIndex == index])}
                            y={4}
                            x={Math.min(xScale(caption.timeBegin), xScale(caption.timeEnd))}
                            height={12}
                            width={Math.abs(xScale(caption.timeEnd) - xScale(caption.timeBegin))}
                        /> : null
                ))}
            </g>
        );
    }

    public getCaptionAtTimestamp(timestamp: number): number {
        for (let index = 0; index < this.props.tutorial.captions.length; index++) {
            let caption = this.props.tutorial.captions[index];
            if (timestamp >= caption.timeBegin && timestamp < caption.timeEnd) {
                return index;
            }
        }
        return null;
    }

    public renderCurrentCaption() {
        if (this.state.currentCaptionIndex == null) return null;
        let current = this.props.tutorial.captions[this.state.currentCaptionIndex];
        return (
            <div className="el-current-caption" dangerouslySetInnerHTML={{ __html: marked(current.text) }} />
        );
    }

    public scrollItemIntoView(index: number) {
        let item = this.captionMap[index];
        let yOffset = this.captions.getBoundingClientRect().top;
        let height = this.captions.getBoundingClientRect().height;
        let scrollTop = this.captions.scrollTop;
        let { y1, y, y2 } = item.getAnchorPoint();
        if (y1 < yOffset) {
            this.captions.scrollTop = Math.round(scrollTop + y1 - yOffset - height * 0.2);
        }
        if (y2 > yOffset + height) {
            this.captions.scrollTop = Math.round(scrollTop + y2 - yOffset + height * 0.8);
        }
    }

    public onTimestampUpdated(timestamp: number, isUserInitiated: boolean) {
        let index = this.getCaptionAtTimestamp(timestamp);
        if (index != this.state.currentCaptionIndex) {
            if (!this.videoView.state.autoplay && !isUserInitiated && this.state.currentCaptionIndex != null) {
                this.videoView.pause();
            } else {
                this.setState({
                    currentCaptionIndex: index,
                    keepCurrentInView: true
                });
            }
        }
        if (this.state.keepCurrentInView && index != null) {
            this.scrollItemIntoView(index);
        }
    }

    public componentDidMount() {
        if (this.props.initialTime != null) {
            this.videoView.seek(this.props.initialTime);
            this.videoView.play();
        }
    }

    public render() {
        return (
            <div
                className="charticulator__tutorial-view"
                style={{ height: this.props.height + "px" }}
            >
                <div
                    className="charticulator__tutorial-view-video"
                    style={{ height: this.props.height + "px" }}
                >
                    <VideoView
                        ref={(e) => this.videoView = e}
                        source={this.props.tutorial.videoSource}
                        width={this.props.width - 440}
                        height={(this.props.height - 40)}
                        renderTimeAxis={this.renderTimeAxis.bind(this)}
                        onTimeUpdate={(timestamp, isUserInitiated) => {
                            this.onTimestampUpdated(timestamp, isUserInitiated);
                        }}
                        onPlay={() => {
                            let index = this.getCaptionAtTimestamp(this.videoView.time);
                            this.setState({
                                currentCaptionIndex: index,
                                keepCurrentInView: true
                            });
                        }}
                    />
                </div>
                <div
                    className="charticulator__tutorial-view-captions"
                    style={{ height: this.props.height + "px" }}
                    ref={(e) => this.captions = e}
                    onScroll={() => {
                        this.setState({ keepCurrentInView: false });
                    }}
                >
                    {this.props.tutorial.captions.map((caption, index) => (
                        <CaptionView
                            key={index}
                            caption={caption}
                            active={this.state.currentCaptionIndex == index}
                            onClick={() => this.onCaptionClick(caption, index)}
                            ref={(e) => this.captionMap[index] = e}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export class CaptionView extends React.Component<{
    caption: TutorialCaption;
    active: boolean;
    onClick?: (caption: TutorialCaption) => void;
}, {}> {
    container: HTMLButtonElement;

    public getAnchorPoint() {
        if (!this.container) return null;
        let bbox = this.container.getBoundingClientRect();
        return {
            x: bbox.left + bbox.width,
            y: bbox.top + bbox.height / 2,
            y1: bbox.top,
            y2: bbox.top + bbox.height
        };
    }

    public render() {
        let caption = this.props.caption;
        if (caption.section) {
            return (
                <div
                    className={classNames("el-caption-section")}
                    dangerouslySetInnerHTML={{ __html: marked(caption.section) }}
                />
            );
        }
        if (caption.text) {
            return (
                <button
                    ref={(e) => this.container = e}
                    tabIndex={0}
                    className={classNames("el-caption", ["is-active", this.props.active])}
                    dangerouslySetInnerHTML={{ __html: marked(caption.text) }}
                    onClick={(e) => this.props.onClick(caption)}
                />
            );
        }
    }
}