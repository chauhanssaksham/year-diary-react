import React, {Fragment} from 'react';
import './styles/App.scss';
// import './styles/materialize/js/bin/materialize.js';
import HomePage from './components/Layout/HomePage'
import AuthState from './context/Auth/AuthState'

function App() {
  return (
    <AuthState>
    {/* <Redirect to='/login' /> */}
        <HomePage/>
    </AuthState>
  );
}

export default App;
