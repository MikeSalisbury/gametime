import { connect } from 'react-redux';
import ShowGame from './showGame';
import { withRouter } from 'react-router-dom';
import { fetchGame} from '../../../actions/actions';

const mapStateToProps = state => ({
auth: state.auth,
game: state.games
});

const mapDispatchToProps = dispatch => ({
  fetchGame: id => dispatch(fetchGame(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowGame));
