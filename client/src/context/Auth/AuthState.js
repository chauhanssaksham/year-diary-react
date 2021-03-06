import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import {errorNoty} from '../../utils/noty'; 
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN_FAIL,
    AUTH_ERROR
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Load User
    const loadUser = async () => {
        //@ Load the token into a global header, so we dont have to set it everytime
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        //
        try {
            const res = await axios.get('/api/v1/auth');
            dispatch({type:USER_LOADED, payload:res.data});  
        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    };
    //Register User
    const register = async (formData) => {
        try {
            const res = await axios.post('/api/v1/users', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (err) {
            if(err.response.data.error){
                errorNoty(err.response.data.error.msg);
            }
            if (err.response.data.errors){
                err.response.data.errors.forEach(error=>{
                    errorNoty(error.msg);
                });
            }
            dispatch({type:REGISTER_FAIL});
        }
    }

    //Login User
    const login = async (formData) => {
        try {
            const res = await axios.post('/api/v1/auth', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            /*SET UP MANUAL PROXYING*/
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (err) {
            if(err.response.data.error){
                dispatch({type: LOGIN_FAIL});
                errorNoty(err.response.data.error.msg);
            }
            if (err.response.data.errors){
                dispatch({type: LOGIN_FAIL});
                err.response.data.errors.forEach(error=>{
                    errorNoty(error.msg);
                });
            }
            
        }
    }

    //Logout User

    return(
        <AuthContext.Provider value={{
             token: state.token,
             isAuthenticated: state.isAuthenticated,
             loading: state.loading,
             user: state.user,
             register,
             loadUser,
             login
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;