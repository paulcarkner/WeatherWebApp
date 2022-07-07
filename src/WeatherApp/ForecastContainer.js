import Style from "./ForecastContainer.module.css";
import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';
import ForecastDays from './ForecastDays';
import LineChart from './LineChart';
import { processTemp, UNIXtoDateTime, getUTCTime, getUTCDay } from './Utils/Weather.js';

export default class ForecastContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={Style.forecastContainer}>
            <Forecast location={this.props.location} weather={this.props.weather} />
        </div>;
    }
}

class Forecast extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={Style.forecastPanel}>
            <div className={Style.leftPanel}>
                <div className={Style.locationName}>{this.props.location.name}</div>
                <div className={Style.currentMain}>
                    <WeatherIcon className={Style.currentIcon} weatherCode={this.props.weather.current.weather[0].id} size="1em" time={this.props.weather.current.dt} timezone={this.props.weather.timezone_offset} />
                    <div>{this.props.weather.current.weather[0].main}</div>
                    <div className={Style.currentMainTemp}><WeatherTemp temp={this.props.weather.current.temp} decimals={1} /></div>
                </div>
                <div>
                    <LineChart data={this.props.weather.hourly.slice(1, 8).map(hour => { let h = UNIXtoDateTime(hour.dt, this.props.weather.timezone_offset).getUTCHours(); return {x: (h == 0) ? "12AM" : (h > 12) ? (h - 12) + "PM" : h + "AM", y: parseFloat(processTemp(hour.temp, 1))}; }) } append="C" major="1" />
                </div>
            </div>
            <div className={Style.divider}></div>
            <div className={Style.rightPanel}>
                <div className={Style.sectionTitle}><span>Details</span></div>
                <div className={Style.detailsContainer}>
                    <div>
                        <div className="diw-thermometer-50"></div>
                        <div className={Style.detailTitle}>Feels Like</div>
                        <div><WeatherTemp temp={this.props.weather.current.feels_like} decimals={1} /></div>
                    </div>
                    <div>
                        <div className="diw-wind"></div>
                        <div className={Style.detailTitle}>Wind</div>
                        <div>{(this.props.weather.current.wind_speed * 3.6).toFixed(1)} km/h <span className="material-icons-outlined" style={{ transform: `rotate(${360 - this.props.weather.current.wind_deg}deg)`, fontSize: '1em', display: 'inline-block' }}>arrow_upward</span></div>
                    </div>
                    <div>
                        <div className="material-icons-outlined">water_drop</div>
                        <div className={Style.detailTitle}>Humidity</div>
                        <div>{this.props.weather.current.humidity} %</div>
                    </div>
                    <div>
                        <div className="material-icons-outlined">speed</div>
                        <div className={Style.detailTitle}>Pressure</div>
                        <div>{this.props.weather.current.pressure / 10} kPa</div>
                    </div>
                    <div>
                        <div className="diw-sun-rise"></div>
                        <div className={Style.detailTitle}>Sunrise</div>
                        <div>{getUTCTime(UNIXtoDateTime(this.props.weather.current.sunrise, this.props.weather.timezone_offset))}</div>
                    </div>
                    <div>
                        <div className="diw-sun-set"></div>
                        <div className={Style.detailTitle}>Sunset</div>
                        <div>{getUTCTime(UNIXtoDateTime(this.props.weather.current.sunset, this.props.weather.timezone_offset))}</div>
                    </div>
                </div>
                <div className={Style.sectionTitle}><span>Chance Of Rain</span></div>
                <div>
                    <LineChart data={this.props.weather.hourly.slice(1, 26).map(hour => { let h = UNIXtoDateTime(hour.dt, this.props.weather.timezone_offset).getUTCHours(); return { x: (h == 0) ? "12AM" : (h > 12) ? (h - 12) + "PM" : h + "AM", y: hour.pop * 100 }; })} min="0" max="100" append="%" major="3" />
                </div>
                <div className={Style.sectionTitle}><span>Next 7 Days</span></div>
                <div>
                    <ForecastDays weather={this.props.weather} location={this.props.location} />
                </div>
            {/*    <div className={Style.currentDetails}>*/}
            {/*        <div title="cloud coverage">*/}
            {/*            <div className="diw-clouds"></div>*/}
            {/*            <div>{this.props.weather.current.clouds}%</div>*/}
            {/*        </div>*/}
            {/*        <div title="uv index">*/}
            {/*            <div className="diw-sun"></div>*/}
            {/*            <div>{this.props.weather.current.uvi}</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            </div>
        </div>;
    }
}