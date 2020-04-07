import { connect } from 'react-redux';
import SearchResult from './search_result';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  recipes: Object.values(entities.recipes)
            .filter(recipe => (
              recipe.title.toLowerCase().split(' ').join('')
                .includes(ownProps.match.params.searchQuery.toLowerCase().split(' ').join(''))
              || recipe.description.toLowerCase().split(' ').join('')
                  .includes(ownProps.match.params.searchQuery.toLowerCase().split(' ').join(''))
            ))
});
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
    // openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResult));