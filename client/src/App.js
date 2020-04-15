import React, {Fragment, useContext, useEffect} from 'react';
import './styles/App.scss';
// import './styles/materialize/js/bin/materialize.js';
import HomePage from './components/Layout/HomePage'
import DiaryPage from './components/Layout/DiaryPage'
import AuthContext from './context/Auth/AuthContext'
import setAuthToken from './utils/setAuthToken';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

if(localStorage.token){
    setAuthToken(localStorage.token);
}

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

function App(props) {
    const classes = useStyles();
    const {isAuthenticated, loadUser, loading} = useContext(AuthContext);
    useEffect(()=>{
        loadUser()
        //eslint-disable-next-line
    }, [])
    if (loading){
        return (<Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>)
    }
  return (
      <Fragment>
    {(isAuthenticated && !loading)?
        <DiaryPage/>:
        <HomePage/>
    }
    </Fragment>
  );
}

export default App;
