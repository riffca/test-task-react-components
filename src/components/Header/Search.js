import React from 'react';

let searchImage  = require("../../images/search.png")

export default class Search extends React.Component {

  constructor() {
    super();
    this.state = {
    	text: "",
      searchAction: false
    }
  }

  onChange(e){
  	e.preventDefault()
  	this.setState({
  		text: e.target.value
  	})
  }

  setSearch(val){
    this.setState({searchAction: val})
  }

  clear(){
    this.setState({text:""})
  }

  render() {
    return (
    	<div className="search">
	      	{ this.state.searchAction ? <div className="search_input">
	      		<input ref="input" placeholder="Example: Cats exhibition" value={this.state.text} onChange={this.onChange.bind(this)} />
	      		{this.state.text ? <span onClick={this.clear.bind(this)}>X</span> : null}
	      	</div>
          :
	      	<div onClick={this.setSearch.bind(this,true)} className="empty_search"><span><img className="huerotate" src={searchImage}/> </span></div> }
    	</div>
    );
  }
}