import { connect } from 'react-redux';

import { unsaveRecipe } from '../../actions/recipe_actions';
import { closeModal } from '../../actions/modal_actions';
import ConfirmSaveRemoval from './confirm_save_removal';

const mapStateToProps = ( { ui }) => ( {
    recipe: ui.unsave
});

const mapDispatchToProps = dispatch => ( {
    unsaveRecipe: recipeId => dispatch(unsaveRecipe(recipeId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSaveRemoval);