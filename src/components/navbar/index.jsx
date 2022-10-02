import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  Apps,
  AssignmentInd,
  Build,
  ClearAll,
  ContactMail,
  Home,
  School,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import { useStyles } from './styles/navbar';

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/portfolio',
  },
  {
    listIcon: <Build />,
    listText: 'Skills',
    listPath: '/skills',
  },
  {
    listIcon: <School />,
    listText: 'Education',
    listPath: '/education',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    listPath: '/contacts',
  },
];

function Navbar() {
  const classes = useStyles();
  const [slider, Setslider] = useState({
    right: false,
  });

  const toggleSlide = (toggler, open) => () => {
    Setslider({ ...slider, [toggler]: open });
  };
  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSlide}
      onClick={toggleSlide(slider, false)}
    >
      <Avatar
        className={classes.myImage}
        src="/images/myImage.jpeg"
        alt="Sakil Khan"
      />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.listPath}>
            <ListItemIcon className={classes.listIcon}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listText}>
              {item.listText}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <AppBar position="static" style={{ background: '#222' }}>
        <Toolbar>
          <IconButton onClick={toggleSlide('right', true)}>
            <ClearAll style={{ background: '#E74C3C' }} />
          </IconButton>
          <Typography variant="h5">
            <a
              href="/"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                textDecoration: 'none',
              }}
            >
              Sakil Khan
            </a>
          </Typography>
          <Drawer
            anchor="left"
            open={slider.right}
            onClose={toggleSlide('right', false)}
          >
            {sideList('right')}
            <Footer />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
