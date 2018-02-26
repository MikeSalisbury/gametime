import React, { Component } from 'react';

class ShowGame extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
  }

  render() {
    return(
      <div className='showGame-wrapper'>
        <h1>Game Show Page</h1>
      </div>
    );
  }
}

export default ShowGame;
