import React, { Component } from 'react';
import { BrowseGamesItem } from './browseGamesItem';

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
      console.log(games);
      return(
        <div className='browseGames-wrapper'>
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
      );
    } else {
      return("loading");
    }
  }
}

export default BrowseGames;
