import Style from "./LocationList.module.css";
import React from 'react';
import LocationListItem from './LocationListItem';
import LocationAddButton from './LocationAddButton';

export default class LocationList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={Style.locationList}>
            {this.props.storedLocations.sort((a, b) => (a.name > b.name) ? 1 : -1).map((loc, key) => <LocationListItem location={loc} key={key} handleLocationChange={this.props.handleLocationChange} />)}
            <LocationAddButton locationModalRef={this.props.locationModalRef} />
        </div>;
    }
}