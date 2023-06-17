import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles/skills';
import { skills } from '../../data/data';

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        MY SKILLS
      </Typography>
      <div className={classes.language}>
        <Grid container justify="center">
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.title}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      <span className={classes.languageView}>
                        <Avatar src={skill.logo} className={classes.logo} />
                        {skill.title}
                      </span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default Skills;
