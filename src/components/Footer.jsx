import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    MinWidth: 0,
    maxWidth: 250,
  },
  love: {
    height: '1em',
    width: '1em',
    margin: '0px 0.05em 0px 0.1em',
    verticalAlign: '-0.1em',
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}

export default Footer;
