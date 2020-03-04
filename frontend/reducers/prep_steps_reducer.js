import { RECEIVE_RECIPE } from '../actions/recipe_actions';

const prepStepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECIPE:
      return action.recipe.prepSteps;
    default:
      return state;
  }
};

export default prepStepsReducer;