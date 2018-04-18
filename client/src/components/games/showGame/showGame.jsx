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
      const { title, gameImage, sport, players, numPlayers, skill, location} = game;
      let { startDatetime, endDatetime } = game;
      let gamePlayers = players.map(player => player.firstName + ' ' + player.lastName);
      startDatetime = new Date(startDatetime).toString();
      endDatetime = new Date(endDatetime).toString();
      let startDate = startDatetime.slice(0, 17);
      let startTime = startDatetime.slice(17, 25);
      let endDate = endDatetime.slice(0, 17);
      let endTime = endDatetime.slice(17, 25);

      return(
        <div className='showGame-wrapper'>
          <div className='showGame-header'>
            <div className='showGame-heroImage'><img src={`${gameImage}`} alt='sport'></img></div>
            <div className='showGame-info'>
              <div className='showGame-title'>{title}</div>
              <div className='showGame-sport'>Sport: {sport}</div>
              <div className='showGame-numPlayers'>Players: {game.players.length}/{numPlayers}</div>
              <div className='showGame-skill'>Skill Level: {skill}</div>
              <div className='showGame-location'>Location: {location}</div>
              <div className='showGame-startDatetime'>Start: {startDate + startTime + ' PST'}</div>
              <div className='showGame-endDatetime'>End: {endDate + endTime + ' PST'}</div>
            </div>
          </div>
          <div className='showGame-bottom'>
            <div className='showGame-players'>
              <h1>Players</h1>
              <ul>
                {gamePlayers.map((player, index) =>
                  <li key={index}>{index + 1}. {player}</li>
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
