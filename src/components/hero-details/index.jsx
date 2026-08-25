import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles/hero-details';

const HeroDetails = ({ contacts }) => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root} data-testid="hero-details">
      {contacts.map((contract) => (
        <BottomNavigationAction
          data-testid="hero-details-action"
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
