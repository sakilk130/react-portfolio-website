import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useStyles } from './styles/hero-details';

// data
const contracts = [
  {
    id: 1,
    name: 'GitHub',
    icon: GitHubIcon,
    username: 'sakilk130',
    link: 'https://github.com/sakilk130',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: LinkedInIcon,
    username: 'sakil-khan-076926145',
    link: 'https://www.linkedin.com/in/sakil-khan-076926145/',
  },
];
function HeroDetails() {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation className={classes.root} style={{ background: 'none' }}>
        {contracts.map((contract) => (
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
