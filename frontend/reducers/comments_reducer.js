import { RECEIVE_RECIPE } from '../actions/recipe_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECIPE:
      return action.recipe.comments;
    default:
      return state;
  }
};

export default commentsReducer;