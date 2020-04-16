import { connect } from 'react-redux';

import { unsaveRecipe } from '../../actions/recipe_actions';
import ConfirmSaveRemoval from './confirm_save_removal';

const mapStateToProps = ( { ui }) => ( {
    recipeTitle: ui.unsaveTitle
});

const mapDispatchToProps = dispatch => ( {
    unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSaveRemoval);