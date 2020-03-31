import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions';


export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    // remove if open other session form
    case OPEN_MODAL:
      return [];
    case CLOSE_MODAL:
      // remove if close session form
      return [];
    default:
      return state;
  }
};