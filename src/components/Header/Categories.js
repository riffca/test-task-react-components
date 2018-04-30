import React from 'react';
import Locations from './Locations'
export default class Categories extends React.Component {

  constructor() {
    super();
    this.state = {
	    categories: [
	        "Concerts",
	        "Art",
	        "Festival",
	        "Fashion",
	        "Nigthlife",
	        "Festivals"
	    ],
	    selected: "Categories"
	}  
	this.showMenu = new Locations().showMenu.bind(this) 
  }
  render() {

	let categories = this.state.categories.map((item, index)=><li  onClick={this.showMenu.bind(this, item)} key={index}>{item}</li>)
	return (
		<div id="categories_menu">
			<p onClick={this.showMenu.bind(this)}> categories </p>
	 		{ !this.state.showMenu ? null : <ul>
	 			{ categories }
	 		</ul> }
		</div>
	);

  }
}