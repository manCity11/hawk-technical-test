import { isDevToolActive } from 'MAIN_CONFIG';
import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './reducers';

export const shopStore = configureStore({
  reducer: shopReducer,
  devTools: isDevToolActive,
});
