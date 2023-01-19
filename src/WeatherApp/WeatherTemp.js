import Style from "./WeatherTemp.module.css";
import React from "react";
import { processTemp } from "./Utils/Weather.js";

export default class WeatherTemp extends React.Component {
  render() {
    return this.props.temp == null ? ( //if no temperature data given show empty
      <div></div>
    ) : (
      <div>
        {processTemp(this.props.temp, this.props.decimals)}{/* convert to decimal string */}
        <span className={`${Style.unit} diw-degrees-celcius`}></span>
      </div>
    );
  }
}
