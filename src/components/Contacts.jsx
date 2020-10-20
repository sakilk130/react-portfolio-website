import React from 'react';
import Navbar from './Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid, Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato',
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'tan',
      },
    },
  },
})(TextField);

function Contacts() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div">
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography
              variant="h5"
              style={{
                color: 'tomato',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              Get In Touch
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Company Name"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              size="medium"
            />
            <br />
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Contacts;
