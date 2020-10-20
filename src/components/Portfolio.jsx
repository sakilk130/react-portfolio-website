import React from 'react';
import Navbar from './Navbar';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project1 from '../image/reactWithFirebase.png';

const useStyles = makeStyles({
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: '345',
    margin: '2rem',
  },
});

function Portfolio() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Project--1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project-1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Todo App Using React With Firebase
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae assumenda animi velit soluta dolores rem temporibus
                    commodi qui quod, aliquid accusamus incidunt, dolor quis,
                    aliquam voluptate quasi tenetur architecto! Architecto?
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
                <Button size="small" color="primary">
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project--2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project-2"
                  height="140"
                  //   image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae assumenda animi velit soluta dolores rem temporibus
                    commodi qui quod, aliquid accusamus incidunt, dolor quis,
                    aliquam voluptate quasi tenetur architecto! Architecto?
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
                <Button size="small" color="primary">
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project--3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project-2"
                  height="140"
                  //   image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae assumenda animi velit soluta dolores rem temporibus
                    commodi qui quod, aliquid accusamus incidunt, dolor quis,
                    aliquam voluptate quasi tenetur architecto! Architecto?
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
                <Button size="small" color="primary">
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project--4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project-2"
                  height="140"
                  //   image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae assumenda animi velit soluta dolores rem temporibus
                    commodi qui quod, aliquid accusamus incidunt, dolor quis,
                    aliquam voluptate quasi tenetur architecto! Architecto?
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
                <Button size="small" color="primary">
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Portfolio;
