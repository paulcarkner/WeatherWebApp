import Style from "./ForecastDetail.module.css";
import React from 'react';
import Icons from "../Assets/DripIcons-Weather/webfont.module.css";


export default class ForecastDetail extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return <div>
            <div className={this.props.icon.indexOf("diw") === 0 ? `${Icons.diw} ${Icons[this.props.icon]}` : this.props.icon}>{this.props.iconInner}</div>
            <div className={Style.detailTitle}>{this.props.title}</div>
            <div>{this.props.children}</div>
        </div>
;
    }
}
