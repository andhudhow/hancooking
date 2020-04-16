import { connect } from 'react-redux';

import { unsaveRecipe } from '../../actions/recipe_actions';
import { openModal } from '../../actions/modal_actions';
import RecipeBox from './recipe_box';

const mapStateToProps = ( { entities, session } ) => {
  // 
  return ({
    savedRecipeIds: session.currentUser
      ? session.currentUser.savedRecipeIds : null,
    savedRecipes: entities.savedRecipes,
    savedRecipeCount: session.currentUser.savedRecipeIds.length,
    currentUserEmail: session.currentUser.email
  })
};

const mapDispatchToProps = dispatch => ({
  unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);