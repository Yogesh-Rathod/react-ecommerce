import React from 'react';
import cart from '../../../assets/images/cart.png';
import { Link } from 'react-router-dom';

const CartCount = props => {
    let totalPricing = 0;
    if (props.cart.Cart && props.cart.Cart.length) {
        props.cart.Cart.map(item => {
            let itemPricing =
                parseInt(item.product.product.price) *
                parseInt(item.product.quantity);
            totalPricing += itemPricing;
            return totalPricing;
        });
    }
    return (
        <div className="cart">
            <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                <div className="cart_icon">
                    <img src={cart} alt="" />
                    <div className="cart_count">
                        <span>{props.cart.Cart.length}</span>
                    </div>
                </div>
                <div className="cart_content">
                    <div className="cart_text">
                        <Link to={'/cart'}>Cart</Link>
                    </div>
                    <div className="cart_price">&#8377; {totalPricing}</div>
                </div>
            </div>
        </div>
    );
};

export default CartCount;
