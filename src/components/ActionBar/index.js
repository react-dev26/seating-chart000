import React, { PropTypes } from 'react';
import { FontIcon, Paper } from 'material-ui';
import { connect } from 'react-redux';
import { FiltersCollection, ActionsCollection, TableEditDialog } from 'components';
import { currentTableSelector } from 'reducers/tables/selectors';

import styles from './styles';

const mapStateToProps = state => ({
  currentTable: currentTableSelector(state),
});
const mapDispatchToProps = dispatch => ({});

function ActionBar({ actions, currentTable }) {
  return (
    <Paper zDepth={1} style={styles.container}>
      <TableEditDialog info={currentTable} />
      <div style={styles.actionsCollection}><ActionsCollection actions={actions} brightness="dark" /></div>
    </Paper>
  );
}

ActionBar.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    dropdownItems: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func,
    })),
    action: PropTypes.func,
  })),
  currentTable: PropTypes.shape(),
};

ActionBar.defaultProps = {
  actions: [],
  currentTable: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
