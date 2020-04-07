import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchResult from './search_result';

const mapStateToProps = ({ entities }, ownProps) => ({
  recipes: Object.values(entities.recipes)
            .filter(recipe => (
              recipe.title.toLowerCase().split(' ').join('')
                .includes(ownProps.match.params.searchQuery
                  .toLowerCase().split(' ').join(''))
              || recipe.description.toLowerCase().split(' ').join('')
                  .includes(ownProps.match.params.searchQuery
                    .toLowerCase().split(' ').join(''))
            ))
});
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchResult));