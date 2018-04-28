import React from 'react';
export default class Categories extends React.Component {

  constructor() {
    super();
    this.state = {
	    categories: [
	    	"Explore",
	        "Concerts",
	        "Art",
	        "Festival",
	        "Fashion",
	        "Nigthlife",
	        "Festivals"
	    ],
	    selected: "Categories"
	}   
  }
  render() {

	let categories = this.state.categories.map((item, index)=><li key={index}>{ item } </li>)
	return (
		<div id="categories_menu">
			<p> { this.state.selected } </p>
	 		<ul>
	 			{ categories }
	 		</ul>
		</div>
	);

  }
}