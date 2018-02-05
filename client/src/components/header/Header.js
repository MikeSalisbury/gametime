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
            <Link to='/games/browse' className="nav-right-item"><li>Browse Games</li></Link>
            <Link to='/auth/google' className="nav-right-item"><li>Login with Google</li></Link>
          </div>
        );
      default:
        return(
          <div className="nav-right">
            <Link to='/games/browse' className="nav-right-item"><li>Browse</li></Link>
            <Link to='/games/new' className="nav-right-item"><li>Create</li></Link>
            <Link to='/user' className="nav-right-item"><li>{this.props.auth.firstName}</li></Link>
            <button className="nav-right-item"><li>Logout</li></button>
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

export default connect(mapStateToProps, null)(Header);
