import React from 'react';
import { render } from 'react-dom';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import { Login } from './components/auth/login';
import { Register } from './components/auth/register';
import { Helmet } from 'react-helmet';
import ProductDetails from './components/product-details/product-details';

import { createBrowserHistory } from 'history';

const NotFound = () => {
    return <div>Page Not Found!</div>;
};

createBrowserHistory().listen(() => {
    window.scrollTo(0, 0);
});

render(
    <Router>
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
            </Helmet>
            <Switch>
                <Route path="/" component={App} exact />
                <Route
                    path="/product-details/:type/:id"
                    component={ProductDetails}
                />
                <Route path="/sign-in" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
