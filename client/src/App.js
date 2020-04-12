import React, {Fragment} from 'react';
import './styles/App.scss';
// import './styles/materialize/js/bin/materialize.js';
import HomePage from './components/Layout/HomePage'

function App() {
  return (
    <Fragment>
    {/* <Redirect to='/login' /> */}
        <HomePage/>
    </Fragment>
  );
}

export default App;
