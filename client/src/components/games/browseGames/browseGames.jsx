import React, { Component } from 'react';
import { BrowseGamesItem } from './browseGamesItem';
import './browseGames.css';

class BrowseGames extends Component {

  constructor(props) {
    super(props);
    this.state = {sport: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let sport = this.props.match.params.sport;
    if (sport) {
      this.props.fetchFilteredGames(sport);
    } else {
      this.props.fetchGames();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/games/browse/${e.target.value}`);
    this.props.fetchFilteredGames(e.target.value);
  }

  render() {
    if(this.props.games){
      const games = Object.values(this.props.games);
      return(

        <div className='browseGames-wrapper'>
          <div className='browseGames-left'>
            <div className='browseGames-map'>Map</div>
            <div className='browseGames-filter'>
              <button className='filterButton' value='Basketball'
                 onClick={this.handleSubmit}>Basketball</button>
              <button className='filterButton' value='Football'
                 onClick={this.handleSubmit}>Football</button>
              <button className='filterButton' value='Cricket'
                 onClick={this.handleSubmit}>Cricket</button>
              <button className='filterButton' value='Soccer'
                 onClick={this.handleSubmit}>Soccer</button>
              <button className='filterButton' value='Baseball'
                 onClick={this.handleSubmit}>Baseball</button>
            </div>
          </div>
          <div className='browseGames-right'>
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
      return("loading");
    }
  }
}

export default BrowseGames;
