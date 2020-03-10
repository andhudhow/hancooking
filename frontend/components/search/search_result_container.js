import { connect } from 'react-redux';
import SearchResult from './search_result';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  recipes: Object.values(entities.recipes)
            .filter(recipe => recipe.title.toLowerCase()
            .includes(ownProps.match.params.searchQuery.toLowerCase()))
});
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
    // openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResult));