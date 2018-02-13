import { connect } from 'react-redux';
import GameForm from './gameForm';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
auth: state.auth
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameForm));