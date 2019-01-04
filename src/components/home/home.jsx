import React from 'react';

import { Helmet } from 'react-helmet';
import NewsLetter from '../common/newsletter/newsletter';
import RecentViews from '../common/recents/recents';
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
                <RecentViews />
                <NewsLetter />
            </div>
        );
    }
}

export default HomePage;
