import React from 'react'
import {Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from '../Auth/LoginForm'
import SignUpForm from '../Auth/SignUpForm'

const HomePage = () => {
    return (
        <Router>
        <div className="row main">
            <div className="col s12 l7 grey lighten-2">
            <div className="home-main">
                <h3>My Year Diary</h3>
                <p class="flow-text">
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
            <Switch>
                <Route exact path='/' component={LoginForm} />
                <Route exact path='/signup' component={SignUpForm} />
            </Switch>
            </div>
        </div>
        </Router>
    )
}

export default HomePage
