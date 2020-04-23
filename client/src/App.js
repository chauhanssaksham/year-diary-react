import React, {Fragment, useContext, useEffect} from 'react';
import './styles/App.scss';
// import './styles/materialize/js/bin/materialize.js';
import HomePage from './components/Layout/HomePage'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DiaryPage from './components/Layout/DiaryPage'
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute'

if(localStorage.token){
    setAuthToken(localStorage.token);
}

function App(props) {
  return (
    <Router>    
        <Switch>
            <PrivateRoute exact path='/page' component={DiaryPage} />
            <Route exact path='/' component={HomePage} />
        </Switch>
    </Router>
  );
}

export default App;
