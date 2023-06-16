import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from './components/loading';
import Navbar from './components/navbar';

const Contacts = React.lazy(() => import('./pages/contacts'));
const Education = React.lazy(() => import('./pages/education'));
const Home = React.lazy(() => import('./pages/home/index'));
const Portfolio = React.lazy(() => import('./pages/portfolio'));
const Resume = React.lazy(() => import('./pages/resume'));
const Skills = React.lazy(() => import('./pages/skills'));

const App = () => {
  return (
    <>
      <Navbar />
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </React.Suspense>
    </>
  );
};

export default App;
