import React , {useContext, useEffect, useReducer} from 'react'
import AuthContext from '../../context/Auth/AuthContext';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const DiaryPage = () => {
    const classes = useStyles();
    const authContext = useContext(AuthContext);
    const {user, loading} = authContext;
    useEffect(()=>{
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);
    if (user && !loading){
    return (
        <div>
            Hello, {authContext.user.name}
        </div>
    )
    }   else {
            return (
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            )
    }
}

export default DiaryPage
