import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE
} from '../actions/recipe_actions';

const recipesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_RECIPES:
      return action.recipes;
    case RECEIVE_RECIPE:
      return action.recipe.recipe;
    default:
      return state;
  }
};

export default recipesReducer;