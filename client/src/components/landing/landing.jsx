import React from 'react';
import './landing.css';

class Landing extends React.Component {
  render() {
    return(
      <div className='landing-container'>
        <section className='top-section'>
          What is gametime?
        </section>
        <section className='mid-section'>
          Create an account!
        </section>
        <section className='bot-section'>
          what users are saying!
        </section>
      </div>

    );
  }
}

export default Landing;
