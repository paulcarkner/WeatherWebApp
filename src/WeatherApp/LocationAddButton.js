import Style from "./LocationAddButton.module.css";
import React from 'react';

export default class LocationAddButton extends React.Component {
    constructor(props) {
        super(props)
    }

    showLocationAddModal = (event) => {
        this.props.locationModalRef.current.setState({ isShown: true });
    }

    render() {
        return <button className={Style.addButton} onClick={this.showLocationAddModal}>
            <span className="material-icons-outlined">add_circle_outline</span>
            <span>Add Location</span>
        </button>;
    }
}