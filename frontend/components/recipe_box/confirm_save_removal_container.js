import { connect } from 'react-redux';

import { unsaveRecipe } from '../../actions/recipe_actions';
import ConfirmSaveRemoval from './confirm_save_removal';

const mapDispatchToProps = dispatch => ( {
    unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId))
});

export default connect(mapDispatchToProps)(ConfirmSaveRemoval);