import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles/education';

const educations = [
  {
    id: 1,
    year: 'January 2017 - Present',
    universityName: 'American International University-Bangladesh (AIUB)',
    department: 'Bachelor of Science in Computer Science & Engineering',
    description: '',
  },
  {
    id: 2,
    year: 'April 2014 - December 2016',
    universityName: 'Shahmukhdum College, Rajshahi',
    department: 'Higher Secondary School Certificate',
    description: '',
  },
  {
    id: 3,
    year: 'January 2009 - December 2013',
    universityName: 'Asian School & College, Nachole',
    department: 'Secondary School Certificate',
    description: '',
  },
];

const Education = () => {
  const classes = useStyles();
  return (
    <Box component="header">
      <Typography variant="h4" align="center" className={classes.heading}>
        Education
      </Typography>
      <Box component="div" className={classes.timeLine}>
        {/* start */}
        {educations.map((education) => (
          <>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              {education.year}
            </Typography>

            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {education.universityName}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.body1}
              >
                {education.department}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.subtitle1}
              >
                {education.description}
              </Typography>
            </Box>
          </>
        ))}
        {/* end */}
      </Box>
    </Box>
  );
};

export default Education;
