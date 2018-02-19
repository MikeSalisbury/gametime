import { connect } from 'react-redux';
import GameForm from './gameForm';
import { withRouter } from 'react-router-dom';
import { createGame, fetchUser } from '../../../actions/actions';

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  createGame: game => dispatch(createGame(game)),
  fetchUser: () => dispatch(fetchUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameForm));
