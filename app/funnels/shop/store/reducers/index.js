/* istanbul ignore file */
import { combineReducers } from 'redux';

import cartReducer from './cart.reducer';
import searchReducer from './search.reducer';

export default combineReducers({
  cart: cartReducer,
  search: searchReducer,
});
