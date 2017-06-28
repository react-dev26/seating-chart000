import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import {
  ActionBar,
  Layout,
  AddCircleButton,
  TableSelectPanel,
  PopoverWrapper,
  DrawPanel,
} from 'components';
import tables from 'constants/tables';
import { copyTable, deleteTable, saveSeatings, loadSeatings } from 'reducers/tables/actions';
import { tablesInfoSelector, currentFloorSelector } from 'reducers/tables/selectors';

import styles from './styles';

const mapStateToProps = state => ({
  tables: tablesInfoSelector(state),
  currentFloor: currentFloorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  deleteTable: () => dispatch(deleteTable()),
  copyTable: () => dispatch(copyTable()),
  saveSeatings: (tables) => dispatch(saveSeatings(tables)),
  loadSeatings: () => dispatch(loadSeatings()),
});

class HomePage extends React.Component {

  componentDidMount() {
    this.props.loadSeatings();
  }

  getNewId = () => {
    let i = 1;
    while (true) {
      if (this.state.tables.findIndex(table => table.id === i) === -1) break;
      i++;
    }
    return i;
  }

  render() {
    const { currentFloor, deleteTable, saveSeatings, copyTable } = this.props;
    const actions = [
      { icon: 'delete_forever', action: deleteTable },
      { icon: 'content_copy', action: copyTable },
      { icon: 'save', action: () => saveSeatings(currentFloor.toJS()) },
    ];
    return (
      <div style={styles.container}>
        <ActionBar actions={actions} />
        <DrawPanel tables={currentFloor.toJS()} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
