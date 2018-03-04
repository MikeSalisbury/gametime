import React, { Component } from 'react';
import { BrowseGamesItem } from './browseGamesItem';
import './browseGames.css';

class BrowseGames extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    if(this.props.games){
      const games = Object.values(this.props.games);
      return(

        <div className='browseGames-wrapper'>
          <div className='browseGames-left'>
            <div className='browseGames-map'>Map</div>
            <div className='browseGames-filter'>
              <button className='filterButton'>Basketball</button>
              <button className='filterButton'>Football</button>
              <button className='filterButton'>Cricket</button>
              <button className='filterButton'>Soccer</button>
              <button className='filterButton'>Baseball</button>
            </div>
          </div>
          <div className='browseGames-right'>
            {games.map(game => <BrowseGamesItem
              key={`game-${game._id}`}
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
