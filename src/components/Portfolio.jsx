import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import project1 from '../image/todoAppReactWithFirebase.png';
import project2 from '../image/reactWeatherApp.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
  },
  projectName: {
    color: 'tomato',
  },
  projectDescription: {
    color: 'rgb(132 29 2 / 1)',
  },
  button: {
    backgroundColor: 'tan',
  },
  liveButton: {
    backgroundColor: '#44c767',
    borderRadius: '28px',
    border: '1px solid #18ab29',
    display: 'inline-block',
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: '13px',
    padding: '3px 8px',
    textDecoration: 'none',
    textShadow: '0px 1px 0px #2f6627',
    '&:hover': {
      backgroundColor: '#5cbf2a',
    },
    '&:active': {
      position: 'relative',
      top: '1px',
    },
  },
  sourceButton: {
    backgroundColor: '#7892c2',
    borderRadius: '28px',
    border: '1px solid #4e6096',
    display: 'inline-block',
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: '13px',
    padding: '3px 8px',
    textDecoration: 'none',
    textShadow: '0px 1px 0px #283966',
    '&:hover': {
      backgroundColor: '#476e9e',
    },
    '&:active': {
      position: 'relative',
      top: '1px',
    },
  },
}));

const projects = [
  {
    name: 'Todo App',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: project1,
    live: 'https://react-firebase-todo-app-d37d1.web.app/',
    source: 'https://github.com/sakilk130/react-firebase-todo-app',
  },
  {
    name: 'Weather App',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project2,
    live: 'https://react-weather-app-v1.netlify.app/',
    source: 'https://github.com/sakilk130/react-weather-app',
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Projects */}
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      className={classes.projectName}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className={classes.projectDescription}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.button}>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.liveButton}
                    target="blank"
                    href={project.live}
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.sourceButton}
                    target="blank"
                    href={project.source}
                  >
                    Source Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
