import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    color: '#fff',
    background: 'tomato',
    lineHeight: 1,
    padding: '0.5rem 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#fff',
    padding: 0,
    textTransform: 'uppercase',
  },
  body1: {
    color: 'tomato',
  },
  subtitle1: {
    color: 'tan',
  },
}));

// Resumes
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
          {/* start */}
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
          {/* end */}
        </Box>
      </Box>
    </>
  );
};

export default Resume;
