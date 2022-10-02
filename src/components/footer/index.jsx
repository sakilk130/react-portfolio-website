import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from './styles/footer';

function Footer() {
  const classes = useStyles();
  return (
    <div width="auto" style={{ background: '#222' }}>
      <Typography className={classes.root} style={{ color: 'tomato' }}>
        Made with <span> </span>
        <img
          src="https://twemoji.maxcdn.com/2/72x72/2764.png"
          alt="love"
          className={classes.love}
        />
        <span> </span>
        by Sakil Khan
      </Typography>
    </div>
  );
}

export default Footer;
