import React, { Component } from 'react';

class Landing extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    
    return(
      <div className='landing-wrapper'>
        <h1>LANDING</h1>
      </div>
    );
  }
}

export default Landing;
