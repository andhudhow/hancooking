import { connect } from 'react-redux';
import RecipeHeader from './recipe_header';
import { saveRecipe } from '../../actions/recipe_actions';
import { withRouter } from 'react-router-dom';
// import { receiveModalWithRecipe } from '../../actions/ui_actions';
// import UnsaveModalContainer from '../unsave_modal/unsave_modal_container';

const mapStateToProps = ( {session, entities}, ownProps) => {
    let saveIcon;
    let buttonText;
    let recipe = entities.recipes;
    if (!session.currentUser) {
      saveIcon = "assets/save-white-outline.svg";
      buttonText = "Save To Recipe Box";
    } else if (session.currentUser.savedRecipeIds.includes(parseInt(ownProps.match.params.recipeId))) {
      saveIcon = "assets/save-white.svg"
      buttonText = "Saved";
    } else {
      saveIcon = "assets/save-white-outline.svg";
      buttonText = "Save To Recipe Box";
    }
    return {
      saveIcon,
      buttonText,
      title: recipe.title,
      authorName: recipe.authorName,
      description: recipe.description,
      servings: recipe.servings,
      minDuration: recipe.minDuration
    };
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    saveRecipe: ((recipeId) => dispatch(saveRecipe(recipeId))),
    // launchUnsaveModal: ((recipe) =>
    //   dispatch(receiveModalWithRecipe(UnsaveModalContainer, recipe))),
  }
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeHeader));
