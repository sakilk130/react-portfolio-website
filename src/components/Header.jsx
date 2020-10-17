import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../image/myImage.jpg';
import Typed from 'react-typed';

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Sakil Khan" />
      <Typography variant="h4">
        <Typed strings={['Sakil Khan']} typeSpeed={100} />
      </Typography>
      <br />
      <Typography variant="h5">
        <Typed
          strings={[
            'JavaScript Developer',
            'MERN Stack Developer',
            'Web Developer',
          ]}
          typeSpeed={70}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
