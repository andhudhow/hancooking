import { combineReducers } from 'redux';

import recipes from './recipes_reducer';
import ingredients from './ingredients_reducer';
import prepSteps from './prep_steps_reducer';
import savedRecipes from './saved_recipes_reducer';
import comments from './comments_reducer';
import ratings from './ratings_reducer';

export default combineReducers({
  recipes,
  ingredients,
  prepSteps,
  savedRecipes,
  comments,
  ratings
});