import { connect } from 'react-redux';
import { fetchrecipe } from '../../actions/recipe_actions';
import RecipeShow from './recipe_show';
import { withRouter } from 'react-router-dom';



const mapStateToProps = ({ session, entities}, ownProps) => ({
  recipe: entities.recipes[ownProps.match.params.recipeId],
  currentUser: state.session.currentUser.id,
  );
  
const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeShow));
