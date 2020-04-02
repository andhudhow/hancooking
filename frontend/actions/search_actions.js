const RECEIVE_SEARCH_QUERY = "RECEIVE_SEARCH_QUERY";
const REMOVE_SEARCH_QUERY = "REMOVE_SEARCH_QUERY";

export const receiveSearchQuery = searchQuery => ({
    type: RECEIVE_SEARCH_QUERY,
    searchQuery
});

export const removeSearchQuery = () => ({
    type: REMOVE_SEARCH_QUERY
});