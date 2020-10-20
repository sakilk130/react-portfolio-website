import React from 'react';
import './App.css';
import Index from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';
import { Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Index} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
    </>
  );
}

export default App;
