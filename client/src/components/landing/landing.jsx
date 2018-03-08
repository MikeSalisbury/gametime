import React, { Component } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import { BrowseGamesItem } from '../games/browseGames/browseGamesItem';

class Landing extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    if (this.props.games) {
      let games = Object.values(this.props.games);

      return(
        <div className='landing-wrapper'>
          <img className='landing-heroImage' src='https://jsmultisport.com/wp-content/uploads/2017/07/sports.jpg'/>
          <h1 className='landing-browseTagline'><Link to='/games/browse'>FIND LOCAL PICKUP GAMES BY SPORT</Link></h1>
          <div className='landing-gameIndex'>
            {games.map(game => <BrowseGamesItem
              key={`game-${game._id}`}
              gameImage={game.gameImage}
              title={game.title}
              sport={game.sport}
              skill={game.skill}
              numPlayers={game.numPlayers}
              location={game.location}
              startDatetime={game.startDatetime}
              endDatetime={game.endDatetime} />
            )}
          </div>
        </div>
      );
    } else {
      return "landing";
    }
  }
}

export default Landing;
