import React, { Component } from 'react';
import "./showGame.css";

class ShowGame extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
  }

  render() {
    console.log(this.props.game);
    if (this.props.game) {
      const { title, sport, numPlayers, skill, location,
         startDatetime, endDatetime } =
          this.props.game[this.props.match.params.gameId];
      return(
        <div className='showGame-wrapper'>
          <div className='showGame-header'>
            <div className='showGame-heroImage'>GAME IMAGE</div>
            <div className='showGame-info'>
              <div className='showGame-title'>{title}</div>
              <div className='showGame-sport'>{sport}</div>
              <div className='showGame-numPlayers'>{numPlayers}</div>
              <div className='showGame-skill'>{skill}</div>
              <div className='showGame-location'>{location}</div>
              <div className='showGame-startDatetime'>{startDatetime}</div>
              <div className='showGame-endDatetime'>{endDatetime}</div>
            </div>
          </div>
          <div className='showGame-bottom'>
            <div className='showGame-players'>List of Player Names</div>
            <div className='showGame-chat'>CHAT</div>
            <div className='showGame-locationMap' >MAP</div>
          </div>
        </div>
      );
    } else {
      return (
        <h1>loading</h1>
      );
    }
  }
}

export default ShowGame;
