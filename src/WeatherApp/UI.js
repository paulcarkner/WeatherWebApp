import Style from "./UI.module.css";
import React from 'react';
import LocationList from './LocationList';
import ForecastContainer from './ForecastContainer';

export default class UI extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <LocationList storedLocations={this.props.storedLocations} handleLocationChange={this.props.handleLocationChange} />
            {this.props.weather ?
                <ForecastContainer location={this.props.location} weather={this.props.weather} /> :
                <div></div>
            }
        </div>;
    }
}