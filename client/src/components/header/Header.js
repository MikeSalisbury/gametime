import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchGames } from '../../actions/actions';

import './navbar.css';

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchGames: () => dispatch(fetchGames())
});

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="nav-right">
            <Link to='/games/browse' className="nav-right-item" onClick={() => this.props.fetchGames()}><li>Browse Games</li></Link>
            <a href='/auth/google' className="nav-right-item"><li>Login with Google</li></a>
          </div>
        );
      default:
        return(
          <div className="nav-right">
            <Link to='/games/browse' className="nav-right-item" onClick={() => this.props.fetchGames()}><li>Browse</li></Link>
            <Link to='/games/new' className="nav-right-item"><li>Create</li></Link>
            <Link to='/user' className="nav-right-item"><li>{this.props.auth.firstName}</li></Link>
            <a className="nav-right-item" href='/api/logout'><li>Logout</li></a>
          </div>
        );
    }
  }
  // onClick={logout} for logout button

  render() {
    return(
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className="nav-logo">
            GameTime
          </Link>
          <ul className='nav-right-wrapper'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
