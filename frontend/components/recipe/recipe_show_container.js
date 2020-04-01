import { connect } from 'react-redux';
import { fetchRecipe, saveComment, deleteComment } from '../../actions/recipe_actions';
import { createRating, updateRating } from '../../actions/rating_actions';
import RecipeShow from './recipe_show';
import { withRouter } from 'react-router-dom';



const mapStateToProps = ({ session, entities}, ownProps) => ({
    currentUser: session.currentUser,
    recipe: entities.recipes[ownProps.match.params.recipeId],
    ingredients: Object.keys(entities.ingredients).map(key=>entities.ingredients[key]),
    prepSteps: Object.keys(entities.prepSteps).map(key=>entities.prepSteps[key]),
    comments: Object.keys(entities.comments).map(key=>entities.comments[key]).sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1),
    ratings: Object.keys(entities.ratings).map(key=>entities.ratings[key]),
});
  
const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
  fetchRecipes: () => dispatch(fetchRecipes()),
  saveComment: comment => dispatch(saveComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeShow));