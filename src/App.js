import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ContextProvider from './Components/Context/ContextProvider';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login.js';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shiping from './Components/Shiping/Shiping';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/shiping">
            <Shiping />
          </PrivateRoute>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
};

export default App;