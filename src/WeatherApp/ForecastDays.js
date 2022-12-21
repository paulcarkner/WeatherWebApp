import Style from "./ForecastDays.module.css";
import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';
import { UNIXtoDateTime, getUTCDay } from './Utils/Weather.js';

export default class ForecastDays extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return <div className={Style.forecastDaysContainer}>
            {this.props.weather.daily.map((day, key) => (key === 0) ? null : <ForecastDay weather={day} key={key} timezoneOffset={this.props.weather.timezone_offset} />)}
        </div>;
    }
}

class ForecastDay extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        //console.log(this.props.weather);
        return <div className={Style.forecastDay}>
            <div>{getUTCDay(UNIXtoDateTime(this.props.weather.dt, this.props.timezoneOffset))}</div>
            <div className={Style.pop}>{(this.props.weather.pop === 0) ? " " : (this.props.weather.pop * 100).toFixed(0) + "%"}</div>
            <WeatherIcon weatherCode={this.props.weather.weather[0].id} time={this.props.weather.weather.dt} timezone={this.props.timezoneOffset} size="1.5em" />
            <div className={Style.high}>
                <WeatherTemp temp={this.props.weather.temp.max} decimals={0} />
            </div>
            <div className={Style.low}>
                <WeatherTemp temp={this.props.weather.temp.min} decimals={0} />
            </div>
        </div>;
    }
}