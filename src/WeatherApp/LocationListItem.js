import Style from "./LocationListItem.module.css";
import React from 'react';
import WeatherPreview from "./WeatherPreview";

export default class LocationListItem extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    changeLocation = (e) => {
        this.props.handleLocationChange(this.props.location);
        return false;
    }

    render() {
        return <a className={Style.locationListItem} onClick={this.changeLocation} href="#">
            <div className={Style.city}>{this.props.location.name}</div>
            <div className={Style.forecast}>
                <WeatherPreview location={this.props.location} weather={null} />
            </div>
            <div className={Style.region}>{(this.props.location.state ? this.props.location.state + ", " : "")}{this.props.location.country}</div>
        </a>;
    }
}