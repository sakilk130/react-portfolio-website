import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      MinWidth: 0,
      maxWidth: 250,
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation width="auto" style={{ background: '#222' }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<GitHubIcon />}
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<LinkedInIcon />}
        />
      </BottomNavigation>
    </>
  );
}

export default Footer;
