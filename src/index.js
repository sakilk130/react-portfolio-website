import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <CssBaseline />
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.register();
