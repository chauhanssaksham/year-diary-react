import React, {useState, useContext, useEffect} from 'react'
import LoginForm from '../Auth/LoginForm'
import SignUpForm from '../Auth/SignUpForm'
import AuthContext from '../../context/Auth/AuthContext'

const HomePage = (props) => {
    const [loginForm, setLoginForm] = useState(true);
    const authContext = useContext(AuthContext);

    const {isAuthenticated, loadUser} = authContext;
    const toggleForm = (e) => {
        e.preventDefault();
        setLoginForm(!loginForm);
    }
    useEffect(()=>{
        loadUser();
        if(isAuthenticated){
            props.history.push('/page');
        }
        // eslint-disable-next-line
    }, [isAuthenticated, props.history]);
    return (
        <div className="row main">
            <div className="col s12 l7 grey lighten-2">
            <div className="home-main">
                <h3>Dyear Diary</h3>
                <div className="flow-text">
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                        <li>Quia porro exercitationem incidunt cumque facere accusantium reprehenderit.</li>
                        <li>Illo voluptatum modi magnam? Ratione veniam nostrum illum?</li>
                        <li>Optio molestiae illo voluptatibus sapiente voluptates provident voluptatem?</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="col s12 l5 right-section">
                {loginForm?<LoginForm toggleForm={toggleForm}/>:<SignUpForm toggleForm={toggleForm}/>}
            </div>
        </div>
    )
}

export default HomePage
