import { Box, Typography } from '@material-ui/core';
import React from 'react';

import { educations } from '../../data/data';
import { useStyles } from './styles/education';

const Education = () => {
  const classes = useStyles();
  return (
    <Box component="header">
      <Typography variant="h4" align="center" className={classes.heading}>
        Education
      </Typography>
      <Box component="div" className={classes.timeLine}>
        {educations.map((education) => (
          <React.Fragment key={education.id}>
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
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
