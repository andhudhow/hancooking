import { combineReducers } from 'redux';

import modal from './modal_reducer';
import search from './search_reducer';
import unsave from './unsave_recipe_reducer';

export default combineReducers({
  modal,
  search,
  unsave
});