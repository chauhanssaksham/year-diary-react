import React, {useState, useContext} from 'react'
import axios from 'axios';
import {errorNoty} from '../../utils/noty';
import AuthContext from '../../context/Auth/AuthContext'



const LoginForm = (props) => {
    const authContext = useContext(AuthContext);
    const {login} = authContext;

    const [user, setUser] = useState({
        email:'',
        password:''
    });
    const {email, password} = user;
    const onChange = e => setUser({...user, [e.target.name]: e.target.value});
    const onSubmit = async e => {
        e.preventDefault();
        if (email === '' || password === ''){
            errorNoty( "Please fill in all the fields");
        } else {
            login(user);
        }
    }
    return (
        <div className="form-container">
            <div className="card auth-card"></div>
            <div className="card auth-card login-card">
                <h1 className="title center-align">Login</h1>
                <div className="row">
                    <div className="col s10 offset-s1">
                        <form onSubmit={onSubmit} className="auth-form">
                            <div className="row">
                            <div className="input-field col s10 offset-s1 auth-input-field">
                                <i className="material-icons prefix auth-prefix">email</i>
                                <input type="email" name="email" value={email} onChange={onChange} required/>
                                <label htmlFor="email">Email Id</label>
                            </div>
                            <div className="input-field col s10 offset-s1 auth-input-field">
                                <i className="material-icons prefix auth-prefix">lock</i>
                                <input type="password" name="password" value={password} onChange={onChange} required/>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s10 offset-s1 center auth-input-field">
                                    <button className="btn waves-effect waves-light red lighten-1" type="submit">Submit
                                        <i className="material-icons right">chevron_right</i>
                                    </button>
                            </div>
                            <div className="col s10 offset-s1 center">
                                   <p className="blue-text"><a onClick={props.toggleForm}>New Account? Sign-up here</a></p>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
