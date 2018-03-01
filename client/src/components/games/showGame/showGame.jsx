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
    console.log(this.props.game.players);
    if (this.props.game) {
      return(
        <div className='showGame-wrapper'>
          <div className='showGame-header'>
            <div className='showGame-heroImage' />
            <div className='showGame-info'>
              <div className='showGame-title'>{this.props.game.title}</div>
              <div className='showGame-sport'>{this.props.game.sport}</div>
              <div className='showGame-numPlayers'>{this.props.game.numPlayers}</div>
              <div className='showGame-skill'>{this.props.game.skill}</div>
              <div className='showGame-location'>{this.props.game.location}</div>
              <div className='showGame-startDatetime'>{this.props.game.startDatetime}</div>
              <div className='showGame-endDatetime'>{this.props.game.endDatetime}</div>
            </div>
          </div>
          
          <div className='showGame-locationMap' />
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
