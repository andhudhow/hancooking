import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchResult from './search_result';
import { lowerSplitJoin } from '../../util/search_query_util';

const mapStateToProps = ({ entities }, ownProps) => ({
  recipes: Object.values(entities.recipes)
            .filter(recipe => (
              lowerSplitJoin(recipe.title)
                .includes(lowerSplitJoin(ownProps.match.params.searchQuery)
              || lowerSplitJoin(recipe.description)
                  .includes(lowerSplitJoin(ownProps.match.params.searchQuery))
            )))
});
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchResult));