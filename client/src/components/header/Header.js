import React, { Component } from 'react';
import './navbar.css';

class Header extends Component {
  render() {
    return(
      <nav>
        <div className='nav-wrapper'>
          <a className="nav-logo">
            GameTime
          </a>
          <ul className="nav-right">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
