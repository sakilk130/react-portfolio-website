import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles/hero-details';

const HeroDetails = ({ contacts }) => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      {contacts.map((contract) => (
        <BottomNavigationAction
          key={contract.id}
          icon={<contract.icon />}
          target="blank"
          href={contract.link}
          title={contract.username}
        />
      ))}
    </BottomNavigation>
  );
};

export default HeroDetails;
