import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  CHANGE_TABLE_INFO,
  ADD_TABLE,
  SELECT_TABLE,
  DELETE_TABLE,
  COPY_TABLE,
  CHANGE_POSITION,
  SET_SEATINGS,
} from './constants';

const initialState = fromJS({
  orderItems: [],
  tables: [
    [],
  ],
  currentFloor: 0,
  currentTable: 0,
});

export default handleActions({
  [ADD_TABLE]: (state, action) =>
    state
      .updateIn(['tables', state.get('currentFloor')], list => list.push(action.payload.tableInfo))
      .set('currentTable', state.getIn(['tables', state.get('currentFloor')]).size),
  [DELETE_TABLE]: (state, action) =>
    state
      .updateIn(['tables', state.get('currentFloor')], list => list.delete(state.get('currentTable')))
      .set('currentTable', state.get('currentTable') - 1),
  [COPY_TABLE]: (state, action) =>
    state
      .updateIn(['tables', state.get('currentFloor')], list => {
        const oldTable = list.get(list.size - 1);
        const newTable = {
          ...oldTable,
          position: {
            x: oldTable.position.x + 10,
            y: oldTable.position.y + 10,
          },
          id: Date.now(),
        };

        return list.push(newTable);
      })
      .set('currentTable', state.get('currentTable') + 1),
  [SELECT_TABLE]: (state, action) =>
    state.updateIn(['tables', state.get('currentFloor')], list => {
      const olditem = list.get(action.payload.index);
      const newlist = list.delete(action.payload.index).insert(list.size - 1, olditem);
      return newlist;
    }),
  [CHANGE_TABLE_INFO]: (state, action) =>
    state.updateIn(['tables', state.get('currentFloor'), state.get('currentTable')],
      table => ({ ...table, [action.payload.name]: action.payload.value })),
  [CHANGE_POSITION]: (state, action) =>
    state.updateIn(['tables', state.get('currentFloor')], list => {
      const oldTable = list.get(list.size - 1);
      const newTable = {
        ...oldTable,
        id: Date.now(),
        position: {
          x: action.payload.x,
          y: action.payload.y,
        },
      };
      return list.delete(list.size - 1).push(newTable);
    }),
  [SET_SEATINGS]: (state, action) =>
    state.updateIn(['tables', state.get('currentFloor')], list => List(action.payload.map(item =>
      ({
        id: item.id,
        name: item.name,
        type: 'chair',
        label: 'Chair',
        group: 'seating',
        width: 0.5,
        height: 0.5,
        position: {
          x: parseInt(item.x),
          y: parseInt(item.y),
        },
        rotation: item.rotation,
        color: item.color,
      }),
    ))).set('currentTable', action.payload.length - 1),
}, initialState);
