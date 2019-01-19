import React from 'react';
import heart from '../../../assets/images/heart.png';

const WishList = props => {
    console.log('props ', props);
    return (
        <div className="wishlist d-flex flex-row align-items-center justify-content-end">
            <div className="wishlist_icon">
                <img src={heart} alt="" />
            </div>
            <div className="wishlist_content">
                <div className="wishlist_text">
                    <a href="javascript:void(0)">Wishlist</a>
                </div>
                <div className="wishlist_count">0</div>
            </div>
        </div>
    );
};

export default WishList;
