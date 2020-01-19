import React, { Fragment } from 'react';

import { Router } from '@reach/router'


import HomePage from '../pages/home'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'
import DeshboardPage from '../pages/dashboard'
import ConatactPage from '../pages/contact'
import AboutPage from '../pages/about'
import TravelPage from '../pages/travel'
import LifeStylePage from '../pages/lifestyle'
import SinglePost from '../pages/singlepost'


const Index = () => {
    return (
        <Fragment>
            <Router>
                <HomePage path="/" />
                <LoginPage path="/login" />
                <RegisterPage path="/register" />
                <DeshboardPage path="/deshboard" />
                <AboutPage path="/about" />
                <ConatactPage path="/contact" />
                <TravelPage path="/travel" />
                <LifeStylePage path="/lifestyle" />
                <SinglePost path="/post/:id" />

            </Router>
        </Fragment>
    );
}

export default Index;
