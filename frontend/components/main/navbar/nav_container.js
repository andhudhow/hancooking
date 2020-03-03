import { connect } from 'react-redux';
import { logout, login } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';
import NavBar from './nav_bar';


const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
  });
  
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: demoUser => dispatch(login(demoUser)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);