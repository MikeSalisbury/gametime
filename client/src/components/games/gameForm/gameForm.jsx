import React, { Component } from 'react';
import './gameForm.css';

class GameForm extends Component {

  constructor(props) {
    super(props);
    this.state = { title: "", sport: "", skill: "", location: "", numPlayers: "", startDatetime: "", endDatetime: "", };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createGame(this.state).then(id => this.props.history.push(`/games/${id}`));
  }

  update(prop) {
    return (e) => (
      this.setState({[prop]: e.target.value})
    );
  }


  render() {
    console.log(this.props);
    const { title, sport, skill, numPlayers, location, startDatetime, endDatetime } = this.state;

    return(
      <div className='gameForm-wrapper'>
        <form className='gameForm-form' onSubmit={this.handleSubmit}>
          <label><div className='gameForm-label'>TITLE</div>
          <input
            className='gameForm-gameInput'
            type='text'
            placeholder='Give your game a short distinct name'
            onChange={this.update('title')}
            value={title}/><br/>
          </label>

          <label><div className='gameForm-label'>SPORT</div>
            <select onChange={this.update('sport')}
              className='gameForm-gameSport' value={sport}>
              <option value="">Select a Sport</option>
              <option value='Baseball'>Baseball</option>
              <option value='Basketball'>Basketball</option>
              <option value='Cricket'>Cricket</option>
              <option value='Football'>Football</option>
              <option value='Hockey'>Hockey</option>
              <option value='Soccer/Futbol'>Soccer/Futbol</option>
              <option value='Softball'>Softball</option>
              <option value='Tennis'>Tennis</option>
            </select><br/>
          </label>

          <label><div className='gameForm-label'>SKILL LEVEL</div>
          <select onChange={this.update('skill')}
            className='gameForm-gameSkill' value={skill}>
            <option value="">Select a Skill Level</option>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate (highschool level / no college)</option>
            <option value="Advanced">Advanced (college level)</option>
          </select><br/>
          </label>

          <label><div className='gameForm-label'>NUMBER OF PLAYERS</div>
              <input
                type='number'
                min='2'
                className='gameForm-gameNumPlayers'
                onChange={this.update('numPlayers')}
                value={numPlayers}
                placeholder='12'
              />
          </label>

          <label><div className='gameForm-label'>LOCATION</div>
            <input
              className='gameForm-gameInput'
              type='text'
              placeholder='Venue address'
              onChange={this.update('location')}
              value={location}/><br/>
          </label>

          <div className='start-end-dates'>
            <label><div className='gameForm-label'>START TIME</div>
              <input
                className='gameForm-gameStart'
                type='datetime-local'
                onChange={this.update('startDatetime')}
                value={startDatetime}/>
            </label>

            <label><div className='gameForm-label'>END TIME</div>
              <input
                className='gameForm-gameEnd'
                type='datetime-local'
                onChange={this.update('endDatetime')}
                value={endDatetime}/>
            </label>
          </div>

          <input
            className='gameForm-gameSubmit'
            type='submit'
            value='CREATE GAME' />
        </form>
      </div>
    );
  }
}

export default GameForm;
