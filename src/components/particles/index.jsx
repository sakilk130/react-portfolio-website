import React from 'react';
import Particles from 'react-particles-js';
import { useStyles } from './styles/particles';

const CustomParticles = () => {
  const classes = useStyles();
  return (
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
  );
};

export default CustomParticles;
