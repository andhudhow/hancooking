import { connect } from 'react-redux';
import { unsaveRecipe, saveRecipe } from '../../actions/recipe_actions';
import { selectAllRecipes } from '../../reducers/selectors';
import RecipeIndex from './recipe_index';

const mapStateToProps = ( { entities, session } ) => {
  // debugger
  return ({
    recipes: selectAllRecipes(entities.recipes),
    savedRecipeIds: session.currentUser.savedRecipeIds
  })
};

const mapDispatchToProps = dispatch => ({
  unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
  saveRecipe: recipeId => dispatch(saveRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);