import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_RECIPE_SAVE,
  REMOVE_RECIPE_SAVE
} from '../actions/recipe_actions';

const savedRecipesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser.savedRecipes
    case RECEIVE_RECIPE_SAVE:
      return action.currentUser.savedRecipes
    case REMOVE_RECIPE_SAVE:
      return action.currentUser.savedRecipes
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
};

export default savedRecipesReducer;