import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import {
  RECEIVE_RECIPE_SAVE,
  REMOVE_RECIPE_SAVE
} from '../actions/recipe_actions';


const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_RECIPE_SAVE:
      return { currentUser: action.currentUser };
    case REMOVE_RECIPE_SAVE:
      return { currentUser: action.currentUser };
    default:
      return state;
  }
};

export default sessionReducer;