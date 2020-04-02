import {
    RECEIVE_SEARCH_QUERY,
    REMOVE_SEARCH_QUERY
} from '../actions/search_query_actions';

const searchQueryReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SEARCH_QUERY:
            return action.searchQuery;
        case REMOVE_SEARCH_QUERY:
            return null;
        default:
            return state;
    }
};

export default searchQueryReducer;