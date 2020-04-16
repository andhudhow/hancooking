import { ADD_REDIRECT, REMOVE_REDIRECT } from '../actions/redirect_actions';

const redirectReducer = (state = null, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case ADD_REDIRECT:
            return action.path;
        case REMOVE_REDIRECT:
            return null;
        default:
            return state;
    }
}

export default redirectReducer;