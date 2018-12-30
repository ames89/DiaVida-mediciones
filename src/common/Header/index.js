import React, { Component } from 'reactn';
import { withRouter } from 'react-router';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { HEADER_TITLE, HEADER_GOBACK } from '../../Store/reducers/storeNames';

class Header extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          {this.global[HEADER_GOBACK] && (
            <IconButton onClick={this.handleGoBack} color="inherit">
              <ArrowBack fontSize="default" />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit">
            {this.global[HEADER_TITLE]}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
