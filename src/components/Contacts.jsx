import React from 'react';
import Navbar from './Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid, Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { GridOff } from '@material-ui/icons';

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
  return (
    <>
      <Navbar />
      <Box component="div">
        <Grid container justify="center">
          <Box component="form">
            <Typography variant="h5">Contact With Me</Typography>
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
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Contacts;
