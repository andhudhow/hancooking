import { connect } from 'react-redux';
import { unsaveRecipe, saveRecipe } from '../../actions/recipe_actions';
import RecipeCard from './recipe_card';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( { session } ) => ({
  loggedIn: Boolean(session.currentUser),
  savedRecipeIds: Boolean(session.currentUser) ? session.currentUser.savedRecipeIds : null
});

const mapDispatchToProps = dispatch => ({
  unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
  saveRecipe: recipeId => dispatch(saveRecipe(recipeId)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecipeCard));