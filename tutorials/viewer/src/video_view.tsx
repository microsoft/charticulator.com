// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as React from "react";
import * as d3 from "d3";
import * as Hammer from "hammerjs";
import * as R from "./resources";
import { classNames } from "./utils";
import { trackEvent } from "./telemetry";

function zeroPadding(s: string, length: number) {
    while (s.length < length) {
        s = "0" + s;
    }
    return s;
}


function formatTimestamp(ts: number) {
    let total_seconds = Math.floor(ts);
    let ms = ts - total_seconds;
    let minutes = Math.floor(total_seconds / 60);
    let secs = total_seconds - minutes * 60;
    let ms_str = ms.toFixed(2).substr(2);
    let secs_str = secs.toFixed(0);
    return zeroPadding(minutes.toFixed(0), 2) + ":" + zeroPadding(secs.toFixed(0), 2);
}

export interface VideoViewProps {
    /** The video source */
    source: {
        webm?: string;
        mp4?: string;
    };

    onTimeUpdate?: (timestamp: number, isUserInitiated: boolean) => void;
    onPlay?: () => void;
    onPause?: () => void;

    width: number;
    height: number;

    renderTimeAxis?: (timestamp: number, xScale: d3.ScaleLinear<number, number>) => JSX.Element;
}

export interface VideoViewState {
    canPlay: boolean;
    isPlaying: boolean;
    duration: number;
    currentTime: number;
    autoplay: boolean;
}

export class VideoView extends React.Component<VideoViewProps, VideoViewState> {
    private videoElement: HTMLVideoElement;
    private timerQuery: NodeJS.Timer;
    private svg: SVGElement;
    private hammer: HammerManager;
    private currentTime: number = 0;

    constructor(props: VideoViewProps) {
        super(props);
        this.state = {
            canPlay: false,
            isPlaying: false,
            duration: null,
            currentTime: 0,
            autoplay: false
        };
    }

    public get time() {
        return this.currentTime;
    }

    public get paused() {
        return this.videoElement.paused;
    }

    public seek(time: number) {
        this.videoElement.currentTime = time;
        this.currentTime = time;
        this.props.onTimeUpdate(time, false);
        this.setState({
            currentTime: time
        });
    }

    public play() {
        this.videoElement.play();
    }

    public pause() {
        this.videoElement.pause();
    }

    public componentDidMount() {
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
        window.addEventListener("keydown", this.onKeyDownHandler);

        // Query playback time faster
        this.timerQuery = setInterval(() => {
            let currentTime = this.videoElement.currentTime;
            if (currentTime > this.currentTime) {
                this.currentTime = currentTime;
                this.props.onTimeUpdate(currentTime, false);
                this.setState({
                    currentTime: currentTime
                });
            }
        }, 20);

        this.videoElement.onloadedmetadata = () => {
            this.setState({
                duration: this.videoElement.duration,
                canPlay: true
            });
        };

        this.videoElement.onplay = () => {
            this.setState({
                isPlaying: true
            });
            if (this.props.onPlay) this.props.onPlay();
        };

        this.videoElement.onpause = () => {
            this.setState({
                isPlaying: false
            });
            if (this.props.onPause) this.props.onPause();
        };

        let hammer = new Hammer.Manager(this.svg);
        hammer.add(new Hammer.Tap());
        hammer.add(new Hammer.Pan());
        hammer.on("pan tap", (e) => {
            let x0 = this.svg.getBoundingClientRect().left;
            let x = e.center.x - x0;
            let xScale = this.getXScale();
            let t = xScale.invert(x);
            if (t < 0) t = 0;
            if (t > xScale.domain()[1]) t = xScale.domain()[1];
            this.seek(t);
            this.props.onTimeUpdate(t, true);
        });
        this.hammer = hammer;
    }

    public onKeyDownHandler(e: KeyboardEvent) {
        if (e.shiftKey) {
            if (e.keyCode == 37) {
                this.videoElement.pause();
                this.videoElement.currentTime -= 1;
            }
            if (e.keyCode == 39) {
                this.videoElement.pause();
                this.videoElement.currentTime += 1;
            }
        } else {
            if (e.keyCode == 37) {
                this.videoElement.pause();
                this.videoElement.currentTime -= 0.2;
            }
            if (e.keyCode == 39) {
                this.videoElement.pause();
                this.videoElement.currentTime += 0.2;
            }
        }
        if (e.keyCode == 32 && (e.target == document.body || e.target == this.svg)) {
            if (this.videoElement.paused) {
                this.videoElement.play();
            } else {
                this.videoElement.pause();
            }
            e.preventDefault();
        }
    }

    public componentWillUnmount() {
        clearInterval(this.timerQuery);
        window.removeEventListener("keydown", this.onKeyDownHandler);
        this.hammer.destroy();
    }

    public getXScale(): d3.ScaleLinear<number, number> {
        let xScale = d3.scaleLinear()
            .domain([0, this.state.duration || 100])
            .range([2, this.props.width - 2 - 300]);
        return xScale;
    }

    public renderTimeAxis() {
        let width = this.props.width - 300;
        let xScale = this.getXScale();
        let y = 18;
        return (
            <svg
                width={width} height={24}
                className="el-progress"
                onMouseDown={(e) => e.preventDefault()}
                tabIndex={0}
                ref={(e) => this.svg = e}
            >
                <line x1={0} y1={y} x2={width} y2={y} className="el-bar" />
                {this.props.renderTimeAxis ? this.props.renderTimeAxis(this.state.currentTime, xScale) : null}
                <line x1={0} y1={y} x2={xScale(this.state.currentTime)} y2={y} className="el-bar-highlight" />
                <line y1={0} y2={24} x1={xScale(this.state.currentTime)} x2={xScale(this.state.currentTime)} className="el-current" />
            </svg>
        );
    }

    public render() {
        return (
            <div className="charticulator__tutorial-video-view" style={{
                width: this.props.width + "px",
                height: this.props.height + "px"
            }}>
                <div className="el-video" style={{
                    width: this.props.width + "px",
                    height: (this.props.height - 34) + "px"
                }}>
                    <video
                        ref={(e) => this.videoElement = e}
                        style={{
                            maxWidth: this.props.width + "px",
                            maxHeight: (this.props.height - 34) + "px"
                        }}
                        preload="preload"
                    >
                        {this.props.source.webm ? <source src={this.props.source.webm} type="video/webm" /> : null}
                        {this.props.source.mp4 ? <source src={this.props.source.mp4} type="video/mp4" /> : null}
                    </video>
                </div>
                <div className="el-controls">
                    <button className="el-button"
                        tabIndex={0}
                        onMouseDown={(e) => e.preventDefault()}
                        title={this.state.isPlaying ? "Pause" : "Play"}
                        onClick={() => {
                            if (this.videoElement.paused) {
                                this.videoElement.play();
                            } else {
                                this.videoElement.pause();
                            }
                        }}
                    >
                        <SVGIcon url={this.state.isPlaying ? R.ICON_PAUSE : R.ICON_PLAY} />
                    </button>
                    <button className={classNames("el-button", "el-button-onoff", ["is-on", this.state.autoplay])}
                        tabIndex={0}
                        onMouseDown={(e) => e.preventDefault()}
                        title="Toggle Autoplay"
                        onClick={() => {
                            this.setState({ autoplay: !this.state.autoplay });
                        }}
                    >
                        <SVGIcon url={this.state.autoplay ? R.ICON_ON : R.ICON_OFF} />
                        Autoplay
                    </button>
                    {this.renderTimeAxis()}
                    {this.state.canPlay ? <span className="el-timestamp">{formatTimestamp(this.state.currentTime)}/{formatTimestamp(this.state.duration)}</span> : null}
                </div>
            </div>
        );
    }
}

export function SVGIcon(props: { url: string }) {
    return (
        <span className="el-svg-icon" style={{ backgroundImage: "url(" + props.url + ")" }} />
    );
}