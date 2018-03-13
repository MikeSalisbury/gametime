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
    if (this.props.game) {
      let game = this.props.game[this.props.match.params.gameId];
      const { title, sport, players, numPlayers, skill, location,
         startDatetime, endDatetime } = game;
      let gamePlayers = players.map(player => player.firstName + ' ' + player.lastName);

      console.log(gamePlayers);

      return(
        <div className='showGame-wrapper'>
          <div className='showGame-header'>
            <div className='showGame-heroImage'>GAME IMAGE</div>
            <div className='showGame-info'>
              <div className='showGame-title'>{title}</div>
              <div className='showGame-sport'>{sport}</div>
              <div className='showGame-numPlayers'>{game.players.length}/{numPlayers} players</div>
              <div className='showGame-skill'>{skill}</div>
              <div className='showGame-location'>{location}</div>
              <div className='showGame-startDatetime'>{startDatetime}</div>
              <div className='showGame-endDatetime'>{endDatetime}</div>
            </div>
          </div>
          <div className='showGame-bottom'>
            <div className='showGame-players'>
              <h1>Players</h1>
              <ul>
                {gamePlayers.map((player, index) =>
                  <li>{index + 1}. {player}</li>
                  )}
              </ul>
            </div>
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
