import { connect } from 'react-redux';
import { unsaveRecipe, saveRecipe } from '../../actions/recipe_actions';
import RecipeBox from './recipe_box';

const mapStateToProps = ( { entities, session } ) => {
  // debugger
  return ({
    savedRecipeIds: session.currentUser.savedRecipeIds,
    savedRecipes: entities.savedRecipes,
    savedRecipeCount: session.currentUser.savedRecipeIds.length,
    currentUserEmail: session.currentUser.email
  })
};

const mapDispatchToProps = dispatch => ({
  unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
  saveRecipe: recipeId => dispatch(unsaveRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);