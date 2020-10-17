import React from 'react';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from '@material-ui/core';
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';
import ClearAllIcon from '@material-ui/icons/ClearAll';

function Navbar() {
  return (
    <Box component="nav">
      <AppBar position="static" style={{ background: '#222' }}>
        <Toolbar>
          <IconButton>
            <ClearAllIcon style={{ background: '#E74C3C' }} />
          </IconButton>
          <Typography variant="h5">Sakil Khan</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
