import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useStyles } from './styles/loading';

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export default Loading;
