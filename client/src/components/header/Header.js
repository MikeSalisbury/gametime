import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './navbar.css';

const mapStateToProps = state => ({
  auth: state.auth
});

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="nav-right">
            <Link to='/games/browse' className="nav-right-item"><li className="nav-right-item">Games</li></Link>
            <Link to='/auth/google' className="nav-right-item"><li className="nav-right-item">Login with Google</li></Link>
          </div>
        );
      default:
        return(
          <div className="nav-right">
            <Link to='/games/browse' className="nav-right-item"><li>Games</li></Link>
            <Link to='/user' className="nav-right-item"><li>{this.props.auth.firstName}</li></Link>
          </div>
        );
    }
  }

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

export default connect(mapStateToProps, null)(Header);
