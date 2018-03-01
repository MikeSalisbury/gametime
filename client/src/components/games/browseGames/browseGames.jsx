import React, { Component } from 'react';

class BrowseGames extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    console.log(this.props.games);
    return(
      <div className='browseGames-wrapper'>
        <h1>Browse Games Component</h1>
      </div>
    );
  }
}

export default BrowseGames;
