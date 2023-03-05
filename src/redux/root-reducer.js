import { combineReducers } from '@reduxjs/toolkit';

import contactReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
