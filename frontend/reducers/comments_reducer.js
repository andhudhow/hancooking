import { RECEIVE_RECIPE } from '../actions/recipe_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/recipe_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECIPE:
      return action.recipe.comments;
    case RECEIVE_COMMENT:
      return action.recipe.comments;
    case REMOVE_COMMENT:
      return action.recipe.comments;
    default:
      return state;
  }
};

export default commentsReducer;