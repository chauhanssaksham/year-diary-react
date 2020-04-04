import React, {Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import LoginForm from './components/Login/LoginForm'

function App() {
  return (
    <Fragment>
        <LoginForm />
    </Fragment>
  );
}

export default App;
