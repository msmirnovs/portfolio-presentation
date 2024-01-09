import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import HowItWorksPage from './pages/How-it-works.js';
import _404Page from './pages/404.js';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
         
          <Route exact path="/howitworks">
            <HowItWorksPage />
          </Route>
         
          <Route exact path="/404">
            <_404Page />
          </Route>
        </Switch>
    </Router>
  );
}
