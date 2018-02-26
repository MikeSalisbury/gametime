import React, { Component } from 'react';

class ShowGame extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.fetchGame(this.props.match.params.gameId);
    console.log(this.props);
  }

  render() {
    return(
      <div className='showGame-wrapper'>
      </div>
    );
  }
}

export default ShowGame;
