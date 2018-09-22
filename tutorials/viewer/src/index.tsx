// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as React from "react";
import * as ReactDOM from "react-dom";
import { VideoView } from "./video_view";
import { TutorialView } from "./tutorial_view";
import { TutorialMetadata } from "./data";

export class MainView extends React.Component<{ data: TutorialMetadata, initialTime: number }, { width: number, height: number }> {
    container: HTMLDivElement;

    state = {
        width: 1000,
        height: 600
    };

    public componentDidMount() {
        let resize = () => {
            let bbox = this.container.getBoundingClientRect();
            this.setState({
                width: bbox.width,
                height: bbox.height
            });
        };
        resize();
        window.addEventListener("resize", resize);
    }



    public render() {
        return (
            <div className="charticulator__tutorial-container" ref={(e) => this.container = e}>
                <TutorialView initialTime={this.props.initialTime} tutorial={this.props.data} width={this.state.width} height={this.state.height} />
            </div>
        );
    }
}

export class Application {
    constructor() {
    }

    public getInitialTime() {
        let m = document.location.hash.match(/timeStart\=([0-9\.]+)/);
        if (m) {
            return +m[1];
        } else {
            return null;
        }
    }

    public initialize(containerID: string, data: TutorialMetadata) {
        ReactDOM.render(<MainView initialTime={this.getInitialTime()} data={data} />, document.getElementById(containerID));
    }
}