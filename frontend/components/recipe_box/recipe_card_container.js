import { connect } from 'react-redux';
import { unsaveRecipe, saveRecipe } from '../../actions/recipe_actions';
import RecipeCard from './recipe_card';

const mapStateToProps = ( { session } ) => ({
  savedRecipeIds: session.currentUser.savedRecipeIds
});

const mapDispatchToProps = dispatch => ({
  unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
  saveRecipe: recipeId => dispatch(saveRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);