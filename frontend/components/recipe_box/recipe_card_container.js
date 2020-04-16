import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { unsaveRecipe, saveRecipe } from '../../actions/recipe_actions';
import { openModal } from '../../actions/modal_actions';
import { addRedirect, removeRedirect } from '../../actions/redirect_actions';
import RecipeCard from './recipe_card';

const mapStateToProps = ( { session } ) => ({
  loggedIn: Boolean(session.currentUser),
  savedRecipeIds: Boolean(session.currentUser) ? session.currentUser.savedRecipeIds : null
});

const mapDispatchToProps = dispatch => ({
  unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
  saveRecipe: recipeId => dispatch(saveRecipe(recipeId)),
  openModal: (modal, recipeId, recipeTitle) => dispatch(openModal(modal, recipeId, recipeTitle)),
  addRedirect: path => dispatch(addRedirect(path)),
  removeRedirect: () => dispatch(removeRedirect())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecipeCard));