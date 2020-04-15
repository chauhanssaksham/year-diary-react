import React, {Fragment, useContext, useEffect} from 'react';
import './styles/App.scss';
// import './styles/materialize/js/bin/materialize.js';
import HomePage from './components/Layout/HomePage'
import DiaryPage from './components/Layout/DiaryPage'
import AuthContext from './context/Auth/AuthContext'
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
    setAuthToken(localStorage.token);
}

function App(props) {
    const {isAuthenticated, loadUser} = useContext(AuthContext);
    useEffect(()=>{
        loadUser()
        //eslint-disable-next-line
    }, [])
  return (
      <Fragment>
    {(isAuthenticated)?
        <DiaryPage/>:
        <HomePage/>
    }
    </Fragment>
  );
}

export default App;
