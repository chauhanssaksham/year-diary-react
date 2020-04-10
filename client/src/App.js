import React, {Fragment} from 'react';
import {Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.scss';
// import './styles/materialize/js/bin/materialize.js';
import LoginForm from './components/Auth/LoginForm'
import SignUpForm from './components/Auth/SignUpForm'

function App() {
  return (
    <Router>
    <Fragment>
    {/* <Redirect to='/login' /> */}
    <Switch>
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignUpForm} />
    </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
