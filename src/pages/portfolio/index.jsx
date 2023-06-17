import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { projects } from '../../data/data';
import { useStyles } from './styles/portfolio';

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Projects
      </Typography>
      <Grid container justify="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={project.id}>
            <Card className={classes.cardContainer}>
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
                {project.tools.map((tool) => (
                  <Chip
                    size="small"
                    label={tool}
                    key={tool}
                    color="secondary"
                    className={classes.chip}
                  />
                ))}
              </CardContent>
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
                  color="default"
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
  );
};

export default Portfolio;
