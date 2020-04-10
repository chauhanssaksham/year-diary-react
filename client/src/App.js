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
        <div className="row main">
            <div className="col s12 l7 grey lighten-2"><div><h1>Hello</h1></div></div>
            <div className="col s12 l5 right-section">
            <Switch>
                <Route exact path='/' component={LoginForm} />
                <Route exact path='/signup' component={SignUpForm} />
            </Switch>
            </div>
        </div>
    </Fragment>
    </Router>
  );
}

export default App;
