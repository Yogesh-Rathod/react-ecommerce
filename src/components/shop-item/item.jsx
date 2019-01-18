import React from 'react';

const ShopItem = props => {
    return (
        <div className="col-3 product_item is_new">
            <div className="product_border" />
            <div className="product_image d-flex flex-column align-items-center justify-content-center">
                <img src={props.productInfo.image} alt="" />
            </div>
            <div className="product_content">
                <div className="product_price">
                    &#8377; {props.productInfo.price}
                </div>
                <div className="product_name">
                    <div>
                        <a href="javascript:void(0)">
                            {props.productInfo.name}
                        </a>
                    </div>
                </div>
            </div>
            <div className="product_fav">
                <i className="fas fa-heart" />
            </div>
            <ul className="product_marks">
                <li className="product_mark product_new">
                    {props.productInfo.discount}
                </li>
            </ul>
        </div>
    );
};

export default ShopItem;
