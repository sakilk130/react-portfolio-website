import React from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
  heading: {
    color: 'tomato',
    paddingTop: '1.5rem',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  mainContainer: {
    height: '100%',
    padding: '1rem',
  },
  cardContainer: {
    maxWidth: 450,
    margin: '0.2rem auto',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  projectName: {
    color: 'tomato',
    fontSize: '20px',
  },
  language: {
    background: 'white',
    margin: '0.2rem auto',
    borderRadius: '0.5rem ',
  },
  languageView: {
    display: 'flex',
  },
});

const skills = [
  {
    title: 'C++',
    logo: 'https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png',
  },
  {
    title: 'HTML',
    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  },
  {
    title: 'CSS',
    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
  },
  {
    title: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    title: 'TypeScript',
    logo:
      'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
  },
  {
    title: 'PHP',
    logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
  },
];
function Skills() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          MY SKILLS
        </Typography>
        <div className={classes.language}>
          <Typography variant="p" className={classes.projectName}>
            <StarIcon style={{ color: 'black' }} />
            Programming/Markup Languages
          </Typography>
          <Grid container justify="center">
            {skills.map((skill, i) => (
              <Grid item xs={12} sm={8} md={4} key={i}>
                <Card className={classes.cardContainer}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        <span className={classes.languageView}>
                          <Avatar
                            src={skill.logo}
                            style={{ marginRight: '10px' }}
                          />
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
    </>
  );
}

export default Skills;
