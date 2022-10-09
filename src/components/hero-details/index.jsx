import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { heroInfo } from '../../data/data';
import { useStyles } from './styles/hero-details';

function HeroDetails() {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation className={classes.root} style={{ background: 'none' }}>
        {heroInfo &&
          heroInfo?.contacts?.map((contract) => (
            <BottomNavigationAction
              key={contract.id}
              icon={<contract.icon />}
              target="blank"
              href={contract.link}
              title={contract.username}
            />
          ))}
      </BottomNavigation>
    </>
  );
}

export default HeroDetails;
