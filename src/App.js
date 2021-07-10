import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'

import TipCalculator from './tip-calculator/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route component={TipCalculator} path="/Projects/TipCalculator"></Route>
        </Switch>

        <Link to="/Projects/TipCalculator">Tip Calculator</Link>
      </div>
    </Router>
  );
}

export default App;
