import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import '../App.css';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

// style
const useStyles = makeStyles({
  Particles: {
    position: 'fixed',
    opacity: '0.3',
  },
});
function Index() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.Particles}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'tomato',
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
      {/* <Particles /> */}
    </>
  );
}

export default Index;
