import { OPEN_MODAL } from '../actions/modal_actions';

export const unsaveRecipeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return action.recipeTitle;
        default:
            return state;
    }
};

export default unsaveRecipeReducer;