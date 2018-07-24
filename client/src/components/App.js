import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header/Header';
import Footer from './footer/Footer';
import Landing from './landing/landingContainer';
import BrowseGames from './games/browseGames/browseGamesContainer';
import GameForm from './games/gameForm/gameFormContainer';
import ShowGame from './games/showGame/showGameContainer';
import GameIndex from './games/gamesIndex/gamesIndexContainer';

import * as actions from '../actions/actions';


const UserProfile = () => <h2>Users Profile </h2>;

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Footer />
            <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/games' component={GameIndex} />
            <Route exact path ='/games/new' component={GameForm} />
            <Route exact path ='/games/browse' component={BrowseGames} />
            <Route exact path ='/games/browse/:sport' component={BrowseGames} />
            <Route exact path ='/games/:gameId' component={ShowGame} />
            <Route exact path = '/user' component={UserProfile} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
