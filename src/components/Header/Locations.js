import React from 'react';

let arrowDownImage = require("../../images/arrow-point-to-right.png")
let placeImage = require("../../images/place.png")

export default class Locations extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
		locations: [
			"Moscow",
			"Dubai",
			"Saint-Peterburg",
			"Toronto"
		],
		selected: "Moscow",
		showMenu: false
	}
  }
  showMenu(val){
  	if (typeof val === 'string') {
  		this.setState({showMenu: false, selected: val})
  		return
  	}
  	this.setState({showMenu: true})
  }
  render() {

	let locations = this.state.locations.map((item, index)=><li onClick={this.showMenu.bind(this, item)} key={index}>{item}</li>)
	return (
		<div id="locations_menu">
			<div className="_show_wrap" onClick={this.showMenu.bind(this)}><img src={placeImage}/> <p>{this.state.selected}</p><span className={classnames("svg_arrow", {_rotate: this.state.showMenu})}>{arrowDownImage}</span>/></div>
		 	{	this.state.showMenu ? <ul>
		 			{locations}
		 		</ul> : null }
		</div>	
	);
  }
}