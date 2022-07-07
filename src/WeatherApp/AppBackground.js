import Style from "./AppBackground.module.css";
import React from 'react';
import BackgroundMap from "./BackgroundMap";

export default class AppBackground extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={Style.full}>
            <BackgroundMap location={this.props.location} />
            <BackgroundLandscape location={this.props.location} />
        </div>;
    }
}

class BackgroundLandscape extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <svg className={Style.svg}>
            <defs>
                <filter id="f1" x="-50" y="-50" height="300" width="300">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                    <feBlend in="blur" in2="BackgroundImage" mode="screen" />
                </filter>
            </defs>
            <g filter="url(#f1)">
                <circle cx="50%" cy="50%" r="100" fill="yellow" filter="url(#f1)" />
                <circle cx="50%" cy="50%" r="100" strokeWidth="0" fill="white" />
            </g>
        </svg>;
    }
}