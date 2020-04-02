import { combineReducers } from 'redux';

import modal from './modal_reducer';
import searchQuery from './search_query_reducer';

export default combineReducers({
  modal,
  searchQuery
});