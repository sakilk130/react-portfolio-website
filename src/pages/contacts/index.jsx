import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';

import { EMAIL_VALIDATE_REGX } from '../../constants';
import { InputField, useStyles } from './styles/contacts';

const isValidEmail = (email) => {
  return EMAIL_VALIDATE_REGX.test(email);
};

const Contact = () => {
  const classes = useStyles();
  const url = 'https://formspree.io/f/xgepkqol';

  const [clientInfo, setClientInfo] = useState({
    os: '',
    userAgent: '',
    ipinfo: {},
  });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateForm();
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (validateForm()) {
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('message', formData.message);
        data.append('clientInfo', JSON.stringify(clientInfo));
        await axios({
          method: 'post',
          url,
          data,
        });
        toast.success('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      toast.error('Message failed to send');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const os = navigator.platform;
    const userAgent = navigator.userAgent;

    setClientInfo((prev) => ({
      ...prev,
      os,
      userAgent,
    }));

    axios
      .post('https://api2.ip8.com/ip/info')
      .then((data) => {
        setClientInfo((prev) => ({
          ...prev,
          ipinfo: data,
        }));
      })
      .catch((error) => {
        console.error('Error getting IP and location:', error);
      });
  }, []);

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="div" className={classes.form}>
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
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              name="email"
              inputProps={{ className: classes.input }}
              className={classes.field}
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
              value={formData.message}
              onChange={handleInputChange}
              error={!!errors.message}
              helperText={errors.message}
            />
            <Button
              type="submit"
              variant="outlined"
              fullWidth={true}
              endIcon={!loading && <Send />}
              className={classes.button}
              disabled={loading}
            >
              {loading ? (
                <Oval
                  height={25}
                  width={25}
                  color="tomato"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#250220"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                'Contact Me'
              )}
            </Button>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
