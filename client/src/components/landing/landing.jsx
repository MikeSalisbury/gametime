import React, { Component } from 'react';
import './landing.css';

class Landing extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className='landing-wrapper'>
        <img className='landing-heroImage' src='https://jsmultisport.com/wp-content/uploads/2017/07/sports.jpg'/>
      </div>
    );
  }
}

export default Landing;
