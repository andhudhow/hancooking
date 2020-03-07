import { connect } from 'react-redux';
import { unsaveRecipe, saveRecipe } from '../../actions/recipe_actions';
import RecipeCard from './recipe_card';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ( { session }) => ({
  savedRecipeIds: session.currentUser.id ? session.currentUser.savedRecipeIds : null,
  loggedIn: Boolean(session.currentUser.id)
});

const mapDispatchToProps = dispatch => ({
  unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
  saveRecipe: recipeId => dispatch(saveRecipe(recipeId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);