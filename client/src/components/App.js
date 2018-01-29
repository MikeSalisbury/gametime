import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header/Header';
import Footer from './footer/Footer';
import * as actions from '../actions/actions';

const Landing = () => <h2>Landing</h2>;
const GamesNew = () => <h2>Game New Form</h2>;
const GamesShow = () => <h2>Game Show</h2>;
const GamesBrowse = () => <h2>Browse Games!</h2>;
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
            <Route exact path ='/games/new' component={GamesNew} />
            <Route exact path ='/games/browse' component={GamesBrowse} />
            <Route exact path ='/games/:gameId' component={GamesShow} />
            <Route exact path = '/user' component={UserProfile} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
