import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../image/myImage.jpeg';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import HomeContract from './HomeContract';

//css style
const useStyles = makeStyles((theme) => ({
  avater: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avater} src={avatar} alt="Sakil Khan" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={['Sakil Khan']} typeSpeed={100} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
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
        <HomeContract />
      </Typography>
    </Box>
  );
};

export default Header;
