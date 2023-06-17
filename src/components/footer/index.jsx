import React from 'react';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { heroInfo } from '../../data/data';
import { useStyles } from './styles/footer';

const Footer = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.root}>
      Made with <span> </span>
      <FavoriteIcon data-testid="favorite-icon" />
      by {heroInfo.name}
    </Typography>
  );
};

export default Footer;
