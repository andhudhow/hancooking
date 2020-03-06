import { connect } from 'react-redux';
import { selectCarouselRecipes } from '../../reducers/selectors';
import Main from './main';

const mapStateToProps = ({ entities }) => ({
  recipes: entities.recipes,
  carousel: selectCarouselRecipes(entities.recipes)
});
  
const mapDispatchToProps = dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes()),
    unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);