import React from 'react';

let arrowPointToRight = require("../../images/arrow-point-to-right.png")
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
  render() {

	let locations = this.state.locations.map((item, index)=><li key={index}>{item}</li>)
	return (
		<div id="locations_menu">
			<div className="_show_wrap"><img src={placeImage}/> <p>{this.state.selected}</p><img src={arrowPointToRight}/></div>
		 	{	this.state.showMenu ? <ul>
		 			{locations}
		 		</ul> : null }
		</div>	
	);
  }
}