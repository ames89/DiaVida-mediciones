import React, { Component } from 'reactn';
import { withRouter } from 'react-router';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { ArrowBack, Menu, Person, People } from '@material-ui/icons';
import { HEADER_TITLE, HEADER_GOBACK } from '../../Store/reducers/storeNames';

import styles from './style.module.scss';

const SideList = withRouter(props => (
  <div className={styles['side-list']}>
    <List>
      <ListItem
        button
        onClick={() => {
          props.history.push('/app');
        }}
      >
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Campistas" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          props.history.push('/app/teams');
        }}
      >
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Equipos" />
      </ListItem>
    </List>
  </div>
));

class Header extends Component {
  state = {
    isOpenDrawer: false
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleDrawerOpen = () => {
    this.setState({ isOpenDrawer: true });
  };

  handleCloseDrawer = () => {
    this.setState({ isOpenDrawer: false });
  };

  render() {
    const { isOpenDrawer } = this.state;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            {(this.global[HEADER_GOBACK] && (
              <IconButton onClick={this.handleGoBack} color="inherit">
                <ArrowBack fontSize="default" />
              </IconButton>
            )) || (
              <IconButton color="inherit" onClick={this.handleDrawerOpen}>
                <Menu />
              </IconButton>
            )}
            <Typography variant="h6" color="inherit">
              {this.global[HEADER_TITLE]}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={isOpenDrawer} onClose={this.handleCloseDrawer}>
          <SideList />
        </Drawer>
      </div>
    );
  }
}

export default withRouter(Header);
