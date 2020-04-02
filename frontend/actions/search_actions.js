export const RECEIVE_SEARCH_QUERY = "RECEIVE_SEARCH_QUERY";
export const REMOVE_SEARCH_QUERY = "REMOVE_SEARCH_QUERY";

export const receiveSearchQuery = query => ({
    type: RECEIVE_SEARCH_QUERY,
    query
});

export const removeSearchQuery = () => ({
    type: REMOVE_SEARCH_QUERY
});