import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      MinWidth: 0,
      maxWidth: 50,
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

function HomeContract() {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation className={classes.root} style={{ background: 'none' }}>
        <BottomNavigationAction icon={<GitHubIcon />} />
        <BottomNavigationAction icon={<LinkedInIcon />} />
      </BottomNavigation>
    </>
  );
}

export default HomeContract;
