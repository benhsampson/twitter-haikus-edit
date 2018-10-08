import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Results from './pages/Results';
import Favorites from './pages/Favorites';

class App extends React.Component {
  state = {
    backTo: 'test',
  };

  render() {
    return (
      <Router>
        <main>
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
              path="/favorites"
              component={Favorites}
            />
            <Route
              path="*"
              component={Home}
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
