import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchBar from './search_bar';
import { openModal } from '../../actions/modal_actions';
import { receiveSearchQuery, removeSearchQuery } from '../../actions/search_actions';

const mapStateToProps = ({ entities, session, ui }) => ({
    recipes: Object.values(entities.recipes),
    loggedIn: Boolean(session.currentUser),
    searchQuery: ui.search.query
});
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
    openModal: modal => dispatch(openModal(modal)),
    receiveSearchQuery: query => dispatch(receiveSearchQuery(query)),
    removeSearchQuery: () => dispatch(removeSearchQuery())
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SearchBar)
);