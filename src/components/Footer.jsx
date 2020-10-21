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

function Footer() {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation width="auto" style={{ background: '#222' }}>
        {contracts.map((contract) => (
          <BottomNavigationAction
            key={contract.id}
            className={classes.root}
            style={{ padding: 0 }}
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

export default Footer;
