import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ClearAll } from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { heroInfo } from '../../data/data';
import Footer from '../footer';
import SliderItems from '../slider-items';
import { useStyles } from './styles/navbar';

const Navbar = () => {
  const classes = useStyles();
  const [slider, setSlider] = useState(false);

  const toggleSlide = useCallback(() => {
    setSlider((prevState) => !prevState);
  }, []);

  return (
    <Box component="nav">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={toggleSlide} aria-label="Menu">
            <ClearAll className={classes.clearAll} />
          </IconButton>
          <Typography variant="h5">
            <Link to="/" className={classes.title}>
              {heroInfo.name}
            </Link>
          </Typography>
          <Drawer anchor="left" open={slider} onClose={toggleSlide}>
            <SliderItems toggleSlide={toggleSlide} />
            <Footer />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
