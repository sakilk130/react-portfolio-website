import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Send from '@material-ui/icons/Send';
import axios from 'axios';
import React, { useState } from 'react';
import { InputField, useStyles } from './styles/contacts';

const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/f/xgepkqol',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Get in touch
          </Typography>

          <form onSubmit={handleOnSubmit}>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              name="name"
              inputProps={{ className: classes.input }}
            />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              name="email"
              inputProps={{ className: classes.input }}
              className={classes.field}
            />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
            />

            <Button
              type="submit"
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={classes.button}
              onClick={handleOpen}
            >
              Contact Me
            </Button>

            {/* popup window */}
            {serverState.status && (
              <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
              >
                <div className={classes.paper}>
                  <h1
                    className={!serverState.status.ok ? 'errorMsg' : ''}
                    style={{ color: 'tomato', textAlign: 'center' }}
                  >
                    {' '}
                    {serverState.status.msg}
                  </h1>
                </div>
              </Modal>
            )}
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
