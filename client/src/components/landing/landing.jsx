import React, { Component } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

class Landing extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
      return(
        <div className='landing-wrapper'>
          <img className='landing-heroImage' src='https://jsmultisport.com/wp-content/uploads/2017/07/sports.jpg'/>
          <div className='landing-gameIndex'>
            Find local pickup games <Link to='/games/browse'>here</Link>
          </div>
        </div>
      );
    }
}

export default Landing;
