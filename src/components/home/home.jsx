import React from 'react';
import { Helmet } from 'react-helmet';

import NewsLetter from '../common/newsletter/newsletter';
import RecentViews from '../common/recents/recents';
import BestSeller from '../common/bestseller/bestseller';
import Banners from '../common/banners/banners';
import Header from '../header/header';
import Footer from '../footer/footer';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home Page</title>
                </Helmet>
                <Header />
                <Banners />
                <BestSeller />
                <RecentViews />
                <NewsLetter />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
