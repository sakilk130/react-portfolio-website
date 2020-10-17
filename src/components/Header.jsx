import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../image/myImage.jpg';

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Sakil Khan" />
    </Box>
  );
};

export default Header;
