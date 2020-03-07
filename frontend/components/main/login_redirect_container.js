import { connect } from 'react-redux';
import App from './app'

const mapStateToProps = ( { session } ) => {
  return ({
    loggedIn: Boolean(session.currentUser.id)
  })
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RedirectToLogin));