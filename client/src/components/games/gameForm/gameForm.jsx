import React, { Component } from 'react';
import './gameForm.css';

class GameForm extends Component {

  constructor(props) {
    super(props);
    this.state = { title: "", };
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
    console.log(this.state.title);
    const { title } = this.state;

    return(
      <div className='gameForm-wrapper'>
        <form className='gameForm-form' onSubmit={this.handleSubmit}>
          <label><div className='gameForm-label'>GAME TITLE</div>
          <input
            className='gameForm-gameTitle'
            type='text'
            placeholder='Give your game a short distinct name'
            onChange={this.update('title')}
            value={title}/><br/>
          </label>
        </form>
      </div>
    );
  }
}

export default GameForm;
