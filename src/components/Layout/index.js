import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import tables from 'constants/tables';

import styles from './styles';
import TopNav from './TopNav';
import LeftNav from './LeftNav';

const mapDispatchToProps = dispatch => ({
  saveSeatings: (tables) => dispatch(saveSeatings(tables)),
});

class Layout extends React.Component {
  static propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({

    })),
    children: PropTypes.node,
  };

  static defaultProps = {
    actions: [],
    children: null,
  };

  state = {
    leftNavOpen: false,
  };

  onLeftNavOpen = (leftNavOpen = true) => {
    this.setState({ leftNavOpen });
  }

  onClickLeftNavToggler = () => {
    this.onLeftNavOpen(true);
  }

  render() {
    const { actions, children } = this.props;
    const { leftNavOpen } = this.state;
    const menuItems = [
      {
        type: 'label',
        label: 'Seating',
        children: tables,
      },
    ];
    return (
      <div>
        <TopNav onLeftIconButtonTouchTap={this.onClickLeftNavToggler} actions={actions} />
        <div style={styles.containerWrapper}>
          <LeftNav open={leftNavOpen} onRequestChange={this.onLeftNavOpen} menuItems={menuItems} />
          <div style={styles.contentWrapper}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapDispatchToProps)(Layout);
