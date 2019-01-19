import React from 'react';
import heart from '../../../assets/images/heart.png';

const WishList = ({ cart }) => {
    return (
        <div className="wishlist d-flex flex-row align-items-center justify-content-end">
            <div className="wishlist_icon">
                <img src={heart} alt="" />
            </div>
            <div className="wishlist_content">
                <div className="wishlist_text">
                    <a href="javascript:void(0)">Wishlist</a>
                </div>
                <div className="wishlist_count">{cart.WishList.length}</div>
            </div>
        </div>
    );
};

export default WishList;
