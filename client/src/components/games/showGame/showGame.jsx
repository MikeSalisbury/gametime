import React, { Component } from 'react';

class ShowGame extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.gameId;
    this.props.fetchGame(id);
  }

  render() {
    return(
      <div className='showGame-wrapper'>
        <h1>Game Show Component!</h1>
      </div>
    );
  }
}

export default ShowGame;
