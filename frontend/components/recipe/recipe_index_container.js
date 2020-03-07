import { connect } from 'react-redux';
import { unsaveRecipe, saveRecipe } from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';
import { fetchRecipes } from '../../actions/recipe_actions';

const mapStateToProps = ( { entities, session } ) => {
  
  return ({
    recipes: entities.recipes,
    savedRecipeIds: session.currentUser.savedRecipeIds
  })
};

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
  saveRecipe: recipeId => dispatch(saveRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);