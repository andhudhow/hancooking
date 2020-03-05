import { connect } from 'react-redux';
import RecipeHeader from './recipe_header';
import { saveRecipe, unsaveRecipe } from '../../actions/recipe_actions';
import { withRouter } from 'react-router-dom';
// import { receiveModalWithRecipe } from '../../actions/ui_actions';
// import UnsaveModalContainer from '../unsave_modal/unsave_modal_container';

const mapStateToProps = ( {session, entities}, ownProps) => {
    let saveIcon;
    let btnText;
    let textClass;
    let recipe = entities.recipes;
    
    if (!session.currentUser) {
      saveIcon = "assets/save-white-outline.svg";
      btnText = "Save To Recipe Box";
      textClass = "save-btn-text"
    } else if (session.currentUser.savedRecipeIds.includes(parseInt(ownProps.match.params.recipeId))) {
      saveIcon = "assets/save-white.svg"
      btnText = "Saved";
      textClass = "save-btn-text saved";
    } else {
      saveIcon = "assets/save-white-outline.svg";
      btnText = "Save To Recipe Box";
      textClass = "save-btn-text";
    }
    return {
      // saveIcon,
      btnText,
      textClass,
      recipe
    };
};

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    saveRecipe: ((recipeId) => dispatch(saveRecipe(recipeId))),
    unsaveRecipe: ((recipeId) => dispatch(unsaveRecipe(recipeId)))
    // launchUnsaveModal: ((recipe) =>
    //   dispatch(receiveModalWithRecipe(UnsaveModalContainer, recipe))),
  }
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeHeader));