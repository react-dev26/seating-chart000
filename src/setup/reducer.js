import { combineReducers } from 'redux-immutable';
import tablesReducer from 'reducers/tables/reducer';

export default function createReducer() {
  return combineReducers({
    tables: tablesReducer,
  });
}
