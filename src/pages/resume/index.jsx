import { Box, Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles/resume';
import { resumes } from '../../data/data';

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header">
      <Typography variant="h4" align="center" className={classes.heading}>
        Resume
      </Typography>
      <Box component="div" className={classes.timeLine}>
        {resumes.map((resume) => (
          <React.Fragment key={resume.id}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              {resume.year}
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {resume.role}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.body1}
              >
                <a
                  href={resume.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.companyUrl}
                >
                  {resume.companyName}
                </a>
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.subtitle1}
              >
                {resume.description}
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Resume;
