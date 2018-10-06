import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Results from './pages/Results';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/results/:screen_name"
        component={Results}
      />
      <Route
        path="*"
        component={Home}
      />
    </Switch>
  </Router>
);

export default App;
