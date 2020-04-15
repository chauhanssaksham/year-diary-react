import React, {useState, useContext} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {errorNoty} from '../../utils/noty'; 
import AuthContext from '../../context/Auth/AuthContext'


const SignupForm = () => {
    const authContext = useContext(AuthContext);
    const {register} = authContext;

    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });
    const {name, email, password, password2} = user;
    const onChange = e => setUser({...user, [e.target.name]: e.target.value});
    const onSubmit = async e => {
        e.preventDefault();
        e.preventDefault();
        if(name==='' || email==='' || password===''){
            errorNoty("Please fill all the fields");
        } else if (password !== password2){
            errorNoty("Passwords dont match!");
        } else {
            register({name, email, password});
        }
    }
    return (
        <div className="form-container">
            <div className="card auth-card"></div>
            <div className="card auth-card signup-card">
                <h1 className="title center-align">Sign Up</h1>
                <div className="row">
                    <div className="col s10 offset-s1">
                        <form onSubmit={onSubmit} className="auth-form">
                            <div className="row">
                            <div className="input-field col s10 offset-s1 auth-input-field">
                                <i className="material-icons prefix auth-prefix">account_circle</i>
                                <input type="text" name="name" value={name} onChange={onChange} required/>
                                <label htmlFor="name">Your Name</label>
                            </div>
                            <div className="input-field col s10 offset-s1 auth-input-field">
                                <i className="material-icons prefix auth-prefix">email</i>
                                <input type="email" name="email" value={email} onChange={onChange} required/>
                                <label htmlFor="email">Email Id</label>
                            </div>
                            <div className="input-field col s10 offset-s1 auth-input-field">
                                <i className="material-icons prefix auth-prefix">lock</i>
                                <input type="password" name="password" value={password} onChange={onChange} required minLength='6'/>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s10 offset-s1 auth-input-field">
                                <i className="material-icons prefix auth-prefix">lock</i>
                                <input type="password" name="password2" value={password2} onChange={onChange} required minLength='6'/>
                                <label htmlFor="password2">Confirm Password</label>
                            </div>
                            <div className="input-field col s10 offset-s1 center auth-input-field">
                                    <button className="btn waves-effect waves-light red lighten-1" type="submit">Register
                                        <i className="material-icons right">chevron_right</i>
                                    </button>
                            </div>
                            <div className="col s10 offset-s1 center">
                                   <p className="blue-text"><Link to="/">Already a user? Log-in here</Link></p>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm
