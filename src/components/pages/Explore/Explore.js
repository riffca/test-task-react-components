import React from 'react';
import TrendingEvents from './TrendingEvents';
import './style.scss';
export default class Explore extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="explore">
        <p className="_title_text color_grey">
            Get rewarded<br/>
            for enjoing life
        </p>
        <p className="_bottom_text color_grey_light">
            Earn crypto tokens by heaving fun with friends
        </p>
        <button>Get Started</button>
        <TrendingEvents />
      </div>
    );
  }

}