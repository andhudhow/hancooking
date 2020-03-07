import { connect } from 'react-redux';
import { selectEditorRecipes, selectPopularRecipes } from '../../reducers/selectors';
import Main from './main';

const mapStateToProps = ({ entities }) => ({
  recipes: entities.recipes,
  editor: selectEditorRecipes(entities.recipes),
  popular: selectPopularRecipes(entities.recipes)
});
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
    unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);