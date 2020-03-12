import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_RECIPE_SAVE,
  REMOVE_RECIPE_SAVE
} from '../actions/recipe_actions';

import { RECEIVE_RATING, UPDATE_RATING, REMOVE_RATING } from '../actions/rating_actions';


const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  // 
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: {
        id: action.currentUser.id,
        email: action.currentUser.email,
        savedRecipeIds: action.currentUser.savedRecipeIds,
        ratedRecipeIds: action.currentUser.ratedRecipeIds
      } };
    case RECEIVE_RECIPE_SAVE:
      return { currentUser: {
        id: action.currentUser.id,
        email: action.currentUser.email,
        savedRecipeIds: action.currentUser.savedRecipeIds,
        ratedRecipeIds: action.currentUser.ratedRecipeIds
      } };
    case REMOVE_RECIPE_SAVE:
      return { currentUser: {
        id: action.currentUser.id,
        email: action.currentUser.email,
        savedRecipeIds: action.currentUser.savedRecipeIds,
        ratedRecipeIds: action.currentUser.ratedRecipeIds
      } };
    case RECEIVE_RATING:
      return { currentUser: {
        id: state.currentUser.id,
        email: state.currentUser.email,
        savedRecipeIds: state.currentUser.savedRecipeIds,
        ratedRecipeIds: action.payload.ratedRecipeIds
      } };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;