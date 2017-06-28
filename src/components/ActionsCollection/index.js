import React, { PropTypes } from 'react';
import { FontIcon, IconMenu, MenuItem } from 'material-ui';

import styles from './styles';

function ActionsCollection({ actions, brightness }) {
  return (
    <div style={styles.container}>
      {
        actions.map(action => {
          const iconButton = (
            <FontIcon
              key={action.icon}
              onTouchTap={action.action}
              style={brightness === 'light' ? styles.lightIcon : styles.darkIcon}
              className="material-icons"
            >
              {action.icon}
            </FontIcon>
          );
          return action.dropdownItems && action.dropdownItems.length
            ? (
                <IconMenu
                  key={action.icon}
                  className="material-icons"
                  iconButtonElement={iconButton}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                  {
                    action.dropdownItems.map(dropdownItem =>
                      <MenuItem
                        key={dropdownItem.label}
                        primaryText={dropdownItem.label}
                        onTouchTap={dropdownItem.action}
                      />
                    )
                  }
                </IconMenu>
              )
            : iconButton;
        })
      }
    </div>
  );
}

ActionsCollection.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    dropdownItems: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func,
    })),
    action: PropTypes.func,
  })),
  brightness: PropTypes.string,
};

ActionsCollection.defaultProps = {
  actions: [],
  brightness: 'dark',
};

export default ActionsCollection;
