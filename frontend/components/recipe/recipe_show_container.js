import { connect } from 'react-redux';
import { fetchrecipe } from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';
import { withRouter } from 'react-router-dom';



const mapStateToProps = ({ session, entities}, ownProps) => {
  debugger
  return ({
    currentUser: session.currentUser,
    recipe: entities.recipes[ownProps.match.params.recipeId],
    ingredients: Object.keys(entities.ingredients).map(key=>entities.ingredients[key]),
    prepSteps: Object.keys(entities.prepSteps).map(key=>entities.prepSteps[key]),
    comments: Object.keys(entities.comments).map(key=>entities.comments[key])
  })
};
  
const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
  fetchRecipes: () => dispatch(fetchRecipes())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeShow));
