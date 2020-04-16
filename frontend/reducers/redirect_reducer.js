import { ADD_REDIRECT, REMOVE_REDIRECT } from '../actions/redirect_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

const redirectReducer = (state = null, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case ADD_REDIRECT:
            return action.path;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default redirectReducer;