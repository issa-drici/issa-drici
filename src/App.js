import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import TipCalculator from './tip-calculator'
import Portfolio from './portfolio'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Portfolio />
          </Route>

          <Route exact path="/projects/tip-calculator">
            <TipCalculator />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
