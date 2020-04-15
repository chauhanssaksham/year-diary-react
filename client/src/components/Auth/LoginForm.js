import React, {useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {errorNoty} from '../../utils/noty'; 
const LoginForm = () => {
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
            try{
            const res = await axios.post('http://localhost:9000/api/v1/auth', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.data);
        } catch(err){
            // console.log(err.response);
            if(err.response.data.error){
                errorNoty(err.response.data.error.msg);
            }
            if (err.response.data.errors){
                err.response.data.errors.forEach(error=>{
                    errorNoty(error.msg);
                });
            }
        }
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
                                   <p className="blue-text"><Link to="/signup">New Account? Sign-up here</Link></p>
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
