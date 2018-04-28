import React from 'react';
import classnames from 'classnames';

export default class TrendingEvents extends React.Component {

  constructor(props) {

    super(props);

	let timeOptions = {  
		month: "short",  
	    day: "numeric", hour: "2-digit", minute: "2-digit"  
	};  

    this.state = {
    	events: [
    		{
    			date: new Date().toLocaleTimeString("en-us", timeOptions),
    			label: "new label",
    			wide: false
    		},
    		{
    			date: new Date().toLocaleTimeString("en-us", timeOptions),
    			label: "new label",
    			wide: true
    		},
    		{
    			date: new Date().toLocaleTimeString("en-us", timeOptions),
    			label: "new label",
    			wide: false
    		}
    	]
    }
  }

  render() {

  	let events = this.state.events.map((e, index)=> {
  		return (
  			<div key={index} className={ classnames("event_item",{_wide: e.wide})}> 
	  			<span>{e.date}</span>
	  			<span>{e.label}</span>
  			</div>
  		)
  	})

    return (
     	<div>
     		<h3>Trending events</h3>
      		{events}
     	</div>
    );
  }

}