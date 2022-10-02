import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Typed from 'react-typed';
import HeroDetails from '../hero-details';
import { useStyles } from './styles/hero';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avater}
          src="/images/myImage.jpeg"
          alt="Sakil Khan"
        />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={['Sakil Khan']} typeSpeed={100} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            'Full Stack Developer',
            'JavaScript Developer',
            'MERN Stack Developer',
            'Software Engineer',
            'React Developer',
            'Node.js Developer',
          ]}
          typeSpeed={70}
          backSpeed={60}
          loop
        />
        <HeroDetails />
      </Typography>
    </Box>
  );
};

export default Hero;
