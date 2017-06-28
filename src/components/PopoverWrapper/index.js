import React, { PropTypes } from 'react';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import styles from './styles';

class PopoverWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    controller: PropTypes.node,
    hideOnInsideClick: PropTypes.bool,
    useLayerForClickAway: PropTypes.bool,
    anchorOrigin: PropTypes.shape({
      horizontal: PropTypes.string,
      vertical: PropTypes.string,
    }),
    targetOrigin: PropTypes.shape({
      horizontal: PropTypes.string,
      vertical: PropTypes.string,
    }),
    popoverStyle: PropTypes.shape(),
  };

  static defaultProps = {
    children: null,
    controller: null,
    hideOnInsideClick: false,
    useLayerForClickAway: false,
    anchorOrigin: {horizontal: 'right', vertical: 'top'},
    targetOrigin: {horizontal: 'right', vertical: 'bottom'},
    popoverStyle: {},
  };

  state = { popoverVisible: false };

  hidePopover = () => this.setState({ popoverVisible: false });

  handleTouchTap = (event) => {
    this.setState({
      popoverVisible: true,
      anchorEl: event.currentTarget,
    });
  };

  render() {
    const { controller, children, hideOnInsideClick, useLayerForClickAway, anchorOrigin, targetOrigin, popoverStyle } = this.props;
    const { popoverVisible, anchorEl } = this.state;
    return (
      <div style={styles.container}>
        <div onTouchTap={this.handleTouchTap}>{controller}</div>
        <Popover
          open={popoverVisible}
          anchorEl={anchorEl}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={this.hidePopover}
          animation={PopoverAnimationVertical}
          useLayerForClickAway={useLayerForClickAway}
          style={popoverStyle}
        >
          <span onClick={hideOnInsideClick && this.hidePopover}>{children}</span>
        </Popover>
      </div>
    );
  }
}

export default PopoverWrapper;
