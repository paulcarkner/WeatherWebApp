import Style from "./App.module.css";
import React from 'react';
import { fetchForecast } from './Utils/Weather.js';
import AppBackground from "./AppBackground";
import UI from "./UI";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: null,
            weather: null,
            storedLocations: JSON.parse(localStorage.getItem("WeatherApp_StoredLocations")) || [
                { name: "Cobourg", state: "ON", country: "Canada", lat: 43.967, lon: -78.167 },
                { name: "Innisfil", state: "ON", country: "Canada", lat: 44.3, lon: -79.5834 },
                { name: "Adelaide", state: "SA", country: "Australia", lat: -34.9275, lon: 138.6 },
            ],
        }
        this.state.location = this.state.storedLocations[0];
    }

    handleLocationChange = (data) => {
        fetchForecast(data.lat, data.lon, "minutely,alerts").then(forecast => this.setState({ location: data, weather: forecast }));
    }

    componentDidMount() {
        this.handleLocationChange(this.state.storedLocations[0]);
    }

    render() {
        return <div className={Style.app}>
            <AppBackground location={this.state.location} weather={this.state.weather} />
            <UI location={this.state.location} weather={this.state.weather} storedLocations={this.state.storedLocations} handleLocationChange={this.handleLocationChange} />
        </div>;
    }
}