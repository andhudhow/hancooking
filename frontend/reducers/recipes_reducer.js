import { RECEIVE_RECIPES } from '../actions/recipe_actions';
import { RECEIVE_RATING } from '../actions/rating_actions';

const recipesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_RECIPES:
      return action.recipes;
    case RECEIVE_RATING:
      let newState = Object.assign({}, state);
      newState[action.payload.id].numRatings = action.payload.numRatings;
      return newState;
    default:
      return state;
  }
};

export default recipesReducer;