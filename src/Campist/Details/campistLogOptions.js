import React from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';

import styles from './style.module.scss';

class CampistLogOptions extends React.Component {
  state = { open: false };
  render() {
    return (
      <SpeedDial
        ariaLabel="a"
        className={styles['speed-dial']}
        icon={<SpeedDialIcon />}
        onClick={() => {
          this.setState({ open: !this.state.open });
        }}
        onClose={() => {
          this.setState({ open: false });
        }}
        open={this.state.open}
        direction="left"
      >
        {this.props.actions.map(action => (
          <SpeedDialAction
            tooltipPlacement="top-end"
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.handler}
          />
        ))}
      </SpeedDial>
    );
  }
}

export default CampistLogOptions;
