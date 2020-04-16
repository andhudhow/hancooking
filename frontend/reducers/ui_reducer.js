import { combineReducers } from 'redux';

import modal from './modal_reducer';
import search from './search_reducer';
import unsaveTitle from './unsave_recipe_reducer';

export default combineReducers({
  modal,
  search,
  unsaveTitle
});