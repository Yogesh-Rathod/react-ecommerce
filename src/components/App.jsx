import React from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './home/home';
import { Login } from './auth/login';
import { Register } from './auth/register';
import ProductDetails from '../containers/product-details/product-details';
import Cart from '../containers/cart/cart';
import '../assets/styles/app.scss';
import { createBrowserHistory } from 'history';
import NotFound from './not-found/not-found';

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
                    <Route path="/cart" component={Cart} />
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
