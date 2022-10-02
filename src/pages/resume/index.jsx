import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Navbar from '../../components/Navbar';
import { useStyles } from './styles/resume';

const resumes = [
  {
    id: 1,
    year: '2021',
    role: 'Software Engineer',
    companyName: 'PAP International Ltd.',
    companyUrl: 'http://papint.asia/',
    description:
      'PAP International is a Technology development and Business solution provider that covers all areas of the Industries.The company is now fully setup and operating in Bangladesh as an extension of the parent company in UK.',
  },
];

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header">
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          {resumes.map((resume) => (
            <>
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
                    style={{ textDecoration: 'none', color: 'tomato' }}
                    href={resume.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Resume;
