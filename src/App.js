import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Index from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Index} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/skills" component={Skills} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
