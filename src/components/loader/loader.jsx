import React from 'react';
import loaderImg from '../../assets/images/loader.gif';

const Loader = () => {
    return (
        <div className="loaderContainer">
            <img src={loaderImg} alt="Product Details Loader" />
        </div>
    );
};

export default Loader;