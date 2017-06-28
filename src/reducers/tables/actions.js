import { createAction } from 'redux-actions';
import {
  CHANGE_TABLE_INFO,
  ADD_TABLE,
  DELETE_TABLE,
  SELECT_TABLE,
  COPY_TABLE,
  CHANGE_POSITION,
  LOAD_SEATINGS,
  SET_SEATINGS,
  SAVE_SEATINGS,
} from './constants';

export const addTable = createAction(
  ADD_TABLE,
  tableInfo => ({ tableInfo }),
);

export const deleteTable = createAction(
  DELETE_TABLE,
);

export const copyTable = createAction(
  COPY_TABLE,
);

export const selectTable = createAction(
  SELECT_TABLE,
  index => ({ index }),
);

export const changeTableInfo = createAction(
  CHANGE_TABLE_INFO,
  (name, value) => ({ name, value }),
);

export const changePosition = createAction(
  CHANGE_POSITION,
  (x, y) => ({ x, y }),
);

export const loadSeatings = createAction(
  LOAD_SEATINGS,
);

export const setSeatings = createAction(
  SET_SEATINGS,
);

export const saveSeatings = createAction(
  SAVE_SEATINGS,
  (seats) => ({ seats }),
);
