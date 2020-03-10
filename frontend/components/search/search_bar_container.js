import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }) => ({
    recipes: Object.values(entities.recipes),
    loggedIn: Boolean(session.currentUser)
});
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));