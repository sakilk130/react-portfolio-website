import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  menuSlide: {
    width: 250,
    background:
      'linear-gradient(90deg,rgba(2, 0, 36, 1) 26%,rgba(79, 4, 27, 1) 100%,rgba(2, 0, 36, 1) 100%)',
    height: '100%',
  },
  myImage: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  listText: {
    color: '#EAECEE',
  },
  listIcon: {
    color: 'tan',
  },
}));
