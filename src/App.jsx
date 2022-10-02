import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Contacts from './pages/contacts';
import Education from './pages/education';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';
import Home from './pages/home/index';
import Resume from './pages/resume';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/skills" component={Skills} />
      <Route path="/education" component={Education} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  );
}

export default App;
