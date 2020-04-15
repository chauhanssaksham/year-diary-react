import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import {errorNoty} from '../../utils/noty'; 
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGOUT
} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Load User

    //Register User
    const register = async (formData) => {
        try {
            const res = await axios.post('http://localhost:9000/api/v1/users', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
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

    //Logout User

    return(
        <AuthContext.Provider value={{
             token: state.token,
             isAuthenticated: state.isAuthenticated,
             loading: state.loading,
             user: state.user,
             register
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;