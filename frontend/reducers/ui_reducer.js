import { combineReducers } from 'redux';

import modal from './modal_reducer';
import search from './search_reducer';
import unsave from './unsave_recipe_reducer';
import redirect from './redirect_reducer';

export default combineReducers({
  modal,
  search,
  unsave,
  redirect
});