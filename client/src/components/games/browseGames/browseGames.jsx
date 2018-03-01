import React, { Component } from 'react';

class BrowseGames extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {

    if(this.props.games){
      return(
        <div className='browseGames-wrapper'>
          {Object.values(this.props.games).map(game => {
            game.title;
            game.sport;
            game.skill;
            game.numPlayers;
            game.location;
          })}
        </div>
      );
    } else {
      return("loading");
    }
  }
}

export default BrowseGames;
