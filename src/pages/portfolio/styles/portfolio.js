import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  heading: {
    color: 'tomato',
    paddingTop: '1.5rem',
    textTransform: 'uppercase',
  },
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
    '&:hover': {
      msTransform: 'scale(1.2)',
      webkitTransform: 'scale(1.2)',
      transform: 'scale(1.05)',
      backfaceVisibility: 'hidden',
      // transform: 'translateZ(0)',
      transitionProperty: 'transform',
      transitionDuration: '0.25s',
      transitionTimingFunction: 'ease-out',
      transitionDelay: '0s',
    },
  },

  projectName: {
    color: 'tomato',
  },
  projectDescription: {
    color: 'rgb(132 29 2 / 1)',
  },
  button: {
    backgroundColor: 'rgb(218 218 218)',
  },
}));
