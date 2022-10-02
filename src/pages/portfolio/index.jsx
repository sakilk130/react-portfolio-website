import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles/portfolio';

const projects = [
  {
    image: '/images/todoAppReactWithFirebase.png',
    name: 'Todo App',
    description: `This is a simple Todo app. You can store your todo list. Also you can Add, Edit,\
     Delete and View. As front end I used JavaScript library called 'React'. For designing I used\
     'Material-UI'. And Realtime Database or Cloud Firestore I used 'Firebase'. That's why the app is \
     so faster and robust.`,
    tools: ['javascript', 'react', 'firebase'],
    live: 'https://react-firebase-todo-app-d37d1.web.app/',
    source: 'https://github.com/sakilk130/react-firebase-todo-app',
  },
  {
    image: '/images/reactWeatherApp.png',
    name: 'Weather App',
    description: `This is a Weather app. Where you can search a city and see current weather temperature, \
    wind speed etc. As front end I used JavaScript library called 'React'. I used 'OpenWeather' APIs For request \
    data and  display data.`,
    tools: ['javascript', 'react'],
    live: 'https://react-weather-app-v1.netlify.app/',
    source: 'https://github.com/sakilk130/react-weather-app',
  },
  {
    image: '/images/portfolioUsingReact.png',
    name: 'My Portfolio Website',
    description: `This is my Portfolio Website. Also this is a part of projects. Where people can see some information \
    about me. There are 6 pages like Home, Resume, Portfolio, Contacts, Skills and Educations. For this project i \
    used 'React' for front end and 'Material-UI'.`,
    tools: ['javascript', 'react'],
    live: 'https://sakilkhan.netlify.app/',
    source: 'https://github.com/sakilk130/react-portfolio-website',
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Projects
      </Typography>
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

                  {/* Tools */}
                  {project.tools.map((tool, i) => (
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{
                        marginRight: '5px',
                        height: '18px',
                        background: 'rgb(95 176 71)',
                      }}
                      key={i}
                    >
                      {tool}
                    </Button>
                  ))}
                  {/* end */}
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.button}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  target="blank"
                  href={project.live}
                >
                  Live Demo
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  style={{ background: '#589084' }}
                  target="blank"
                  href={project.source}
                >
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {/* end */}
      </Grid>
    </Box>
  );
};

export default Portfolio;
