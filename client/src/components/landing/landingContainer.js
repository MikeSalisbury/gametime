import { connect } from 'react-redux';
import Landing from './landing';
import { withRouter } from 'react-router-dom';
import { fetchGames } from '../../actions/actions';

const mapStateToProps = state => ({
auth: state.auth
});

const mapDispatchToProps = dispatch => ({
fetchGames: () => dispatch(fetchGames())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing));
