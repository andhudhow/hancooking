import { combineReducers } from 'redux';

import recipes from './recipes_reducer';
import ingredients from './ingredients_reducer';
import prepSteps from './prep_steps_reducer';

export default combineReducers({
  recipes,
  ingredients,
  prepSteps
});