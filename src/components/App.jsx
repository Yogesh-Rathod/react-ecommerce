import React from 'react';

import '../assets/styles/app.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/footer';
import HomePage from './home/home';

import { Helmet } from 'react-helmet';

const App = () => {
    return (
        <Router>
            <div>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
