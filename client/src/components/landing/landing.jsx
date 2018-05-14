import React, { Component } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import { BrowseGamesItem } from '../games/browseGames/browseGamesItem';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/games/browse/${e.target.value}`);
  }

  render() {
    if (this.props.games) {
      let games = Object.values(this.props.games);
      return(
        <div className='landing-wrapper'>
          <img className='landing-heroImage' src='https://jsmultisport.com/wp-content/uploads/2017/07/sports.jpg' alt='multiple sports'/>
          <h1 className='landing-browseTagline'><Link to='/games/browse'>FIND LOCAL PICKUP GAMES BY SPORT</Link></h1>
            <div className='landingGames-filter'>
              <button
                onClick={this.handleSubmit}
                className='filterButton' value='Basketball'>
                Basketball</button>
              <button className='filterButton' value='Football'
                 onClick={this.handleSubmit}>Football</button>
              <button className='filterButton' value='Cricket'
                 onClick={this.handleSubmit}>Cricket</button>
              <button className='filterButton' value='Soccer'
                 onClick={this.handleSubmit}>Soccer</button>
              <button className='filterButton' value='Baseball'
                 onClick={this.handleSubmit}>Baseball</button>
            </div>
          <div className='landing-gameIndex'>
            {games.map(game => <BrowseGamesItem
              key={`game-${game._id}`}
              gameId={game._id}
              image={game.image}
              title={game.title}
              sport={game.sport}
              skill={game.skill}
              numPlayers={game.numPlayers}
              players={game.players}
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
