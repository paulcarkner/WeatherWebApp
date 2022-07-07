import Style from "./WeatherTemp.module.css";
import React from 'react';
import { processTemp } from "./Utils/Weather.js";

export default class WeatherTemp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (this.props.temp == null) ? <div></div> : <div>{processTemp(this.props.temp, this.props.decimals)}<span className={`${Style.unit} diw-degrees-celcius`}></span></div>;
    }
}