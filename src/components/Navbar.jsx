import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from '@material-ui/core';
import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  SentimentSatisfied,
} from '@material-ui/icons';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import myImage from '../image/myImage.jpg';
import { makeStyles } from '@material-ui/core/styles';
import SliderOpen from '@material-ui/core/Drawer';

// CSS for sidebar and myImage
const useStyles = makeStyles((theme) => ({
  menuSlide: {
    width: 250,
    background: '#7B241C ',
    height: '100%',
  },
  myImage: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  listItem: {
    color: '#EC7063',
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
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
    <Box component="div" className={classes.menuSlide}>
      <Avatar className={classes.myImage} src={myImage} alt="Sakil Khan" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listItem}>
              {item.listText}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlide('right', true)}>
              <ClearAllIcon style={{ background: '#E74C3C' }} />
            </IconButton>
            <Typography variant="h5">Sakil Khan</Typography>
            <SliderOpen
              anchor="left"
              open={slider.right}
              onClose={toggleSlide('right', false)}
            >
              {sideList('right')}
            </SliderOpen>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
