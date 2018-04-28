import React from 'react';
import TrendingEvents from './TrendingEvents';
export default class Explore extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
            Get rewarded<br/>
            for enjoing life
        </p>
        <p>
            Earn crypto tokens by heaving fun with friends
        </p>
        <button>Get Started</button>
        <TrendingEvents />
      </div>
    );
  }

}