import React from 'react';
import cart from '../../../assets/images/cart.png';

import { store } from 'react-redux';

class CartCount extends React.Component {
    render() {
        let totalPricing = 0;
        if (this.props.cart.Cart && this.props.cart.Cart.length) {
            this.props.cart.Cart.map(item => {
                totalPricing += parseInt(item.product.product.price);
            });
        }
        return (
            <div className="cart">
                <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                    <div className="cart_icon">
                        <img src={cart} alt="" />
                        <div className="cart_count">
                            <span>{this.props.cart.Cart.length}</span>
                        </div>
                    </div>
                    <div className="cart_content">
                        <div className="cart_text">
                            <a href="javascript:void(0)">Cart</a>
                        </div>
                        <div className="cart_price">&#8377; {totalPricing}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartCount;
