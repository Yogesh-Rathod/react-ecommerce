import React from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';
import RecentViews from '../common/recents/recents';
import NewsLetter from '../common/newsletter/newsletter';

const Layout = props => {
    return (
        <div>
            <Header />
            {props.children}
            <RecentViews />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Layout;
