import { delay } from 'redux-saga';
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  LOAD_SEATINGS,
  SAVE_SEATINGS,
} from './constants';

import {
  loadSeatings,
  saveSeatings,
} from './api';

import {
  setSeatings,
} from './actions';

function* asyncLoadSeatings() {
  const response = yield call(loadSeatings);
  yield put(setSeatings(response));
}

function* asyncSaveSeatings({ payload: { seats } }) {
  const normalizedData = seats.map(seat => (
    {
      id: seat.id,
      name: seat.name,
      x: seat.position.x,
      y: seat.position.y,
      rotation: seat.rotation,
      color: seat.color,
    })
  );
  const response = yield call(saveSeatings, normalizedData);
  console.log(response);
}

export function* getSeatings() {
  yield takeLatest(LOAD_SEATINGS, asyncLoadSeatings)
}

export function* storeSeatings() {
  yield takeLatest(SAVE_SEATINGS, asyncSaveSeatings)
}

export default [
  getSeatings(),
  storeSeatings(),
];
