import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGOUT,
    AUTH_ERROR
} from '../types'

export default (state, action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
            case USER_LOADED:
                return {
                    ...state,
                    isAuthenticated: true,
                    loading: false,
                    user: action.payload
                }    
        default:
            return state;
    }
}