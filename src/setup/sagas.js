import tablesSagas from 'reducers/tables/sagas';

export default function* rootSaga() {
  yield [
    ...tablesSagas,
  ];
}
