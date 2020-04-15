import React, {useState, useContext} from 'react'
import LoginForm from '../Auth/LoginForm'
import SignUpForm from '../Auth/SignUpForm'

const HomePage = () => {
    const [loginForm, setLoginForm] = useState(true);
    const toggleForm = () => {
        setLoginForm(!loginForm);
    }
    return (
        <div className="row main">
            <div className="col s12 l7 grey lighten-2">
            <div className="home-main">
                <h3>My Year Diary</h3>
                <p className="flow-text">
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                        <li>Quia porro exercitationem incidunt cumque facere accusantium reprehenderit.</li>
                        <li>Illo voluptatum modi magnam? Ratione veniam nostrum illum?</li>
                        <li>Optio molestiae illo voluptatibus sapiente voluptates provident voluptatem?</li>
                    </ul>
                </p>
            </div>
            </div>
            <div className="col s12 l5 right-section">
                {loginForm?<LoginForm toggleForm={toggleForm}/>:<SignUpForm toggleForm={toggleForm}/>}
            </div>
        </div>
    )
}

export default HomePage
