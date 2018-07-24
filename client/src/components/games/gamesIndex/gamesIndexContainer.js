import { connect } from 'react-redux';
import gamesIndex from './gamesIndex';
import { withRouter } from 'react-router-dom';
import { fetchGames, fetchFilteredGames } from '../../../actions/actions';

const mapStateToProps = state => ({
auth: state.auth,
games: state.games
});

const mapDispatchToProps = dispatch => ({
fetchGames: () => dispatch(fetchGames()),
fetchFilteredGames: (sport) => dispatch(fetchFilteredGames(sport))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(gamesIndex));
