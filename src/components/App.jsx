import React from 'react';

import '../assets/styles/app.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './home/home';
import { Login } from './auth/login';
import { Register } from './auth/register';
import ProductDetails from './product-details/product-details';

import { Helmet } from 'react-helmet';

import { createBrowserHistory } from 'history';

const NotFound = () => {
    return <div>Page Not Found!</div>;
};

createBrowserHistory().listen(() => {
    window.scrollTo(0, 0);
});

const App = () => {
    return (
        <Router>
            <div>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route
                        path="/product-details/:type/:id"
                        component={ProductDetails}
                    />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
