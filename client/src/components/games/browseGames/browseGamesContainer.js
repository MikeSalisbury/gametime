import { connect } from 'react-redux';
import BrowseGames from './browseGames';
import { withRouter } from 'react-router-dom';
import { fetchGames } from '../../../actions/actions';

const mapStateToProps = state => ({
auth: state.auth,
games: state.games
});

const mapDispatchToProps = dispatch => ({
fetchGames: () => dispatch(fetchGames())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrowseGames));
