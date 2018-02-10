import { connect } from 'react-redux';
import BrowseGames from './browseGames';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
auth: state.auth
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrowseGames));
