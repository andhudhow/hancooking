import { connect } from 'react-redux';
import { selectEditorRecipes, selectPopularRecipes } from '../../reducers/selectors';
import { fetchRecipes, unsaveRecipe } from '../../actions/recipe_actions';
import { openModal } from '../../actions/modal_actions';
import Main from './main';

const mapStateToProps = ({ entities, session }) => ({
  recipes: entities.recipes,
  editor: selectEditorRecipes(entities.recipes),
  popular: selectPopularRecipes(entities.recipes),
  loggedIn: Boolean(session.currentUser)
});
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
    unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);