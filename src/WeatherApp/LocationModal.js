import Style from "./LocationModal.module.css";
import React from 'react';
import Search from './Search';

export default class LocationModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isShown: false };
    }

    //componentDidUpdate(newProps) {
    //    console.log(this.state);
    //}

    changeHandler = (data) => {
        this.setState({ isShown: false });
        this.props.changeHandler(data);
    }

    render() {
        if (!this.state.isShown) return;
        return <div className={Style.full}>
            <Search changeHandler={this.changeHandler} />
        </div>;
    }
}