import {
    RECEIVE_SEARCH_QUERY,
    REMOVE_SEARCH_QUERY
} from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_SEARCH_QUERY:
            newState.query = action.query;
            return newState;
        case REMOVE_SEARCH_QUERY:
            delete newState.query
            return newState;
        default:
            return state;
    }
};

export default searchReducer;