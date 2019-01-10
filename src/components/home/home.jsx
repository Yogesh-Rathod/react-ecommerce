import React from 'react';
import { Helmet } from 'react-helmet';

import BestSeller from '../common/bestseller/bestseller';
import Banners from '../common/banners/banners';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
                <Banners />
                <BestSeller />
            </div>
        );
    }
}

export default HomePage;
