export const ADD_REDIRECT = 'ADD_REDIRECT';
export const REMOVE_REDIRECT = 'REMOVE_REDIRECT';

export const addRedirect = path => {
    return {
        type: ADD_REDIRECT,
        path
    }
};

export const removeRedirect = path => {
    return {
        type: REMOVE_REDIRECT
    }
};