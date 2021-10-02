import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Componets/Home';
import NoMatch from './Componets/NoMatch';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;