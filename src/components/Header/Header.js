import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import Locations from './Locations';
import Categories from './Categories';
import "./style.scss";

let logoImage = require("../../images/kickcity_logo-new.svg");

export default class HeaderComponent extends React.Component {

    constructor(){
        super();
    }

    render(){
        return (
            <div id="header">
                <div className="_left_wrap">
                    <div className="logo"><span>{logoImage}</span></div>
                    <Locations />
                    <Categories />
                </div> 
               <div className="_right_wrap">
                    <Search />
                    <div className="notifications"></div>
                    <div className="event_action color_grey">Create Event</div>
                    <div className="KCY"><span>00.27</span>KCY</div>
                    <div className="avatar"></div>
                </div>  
            </div>
        );
    }
}
