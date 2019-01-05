import React from 'react';

const CartItem = props => {
    return (
        <div>
            {props.cartItems.Cart.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="cart_item_info d-flex flex-md-row flex-column justify-content-between"
                    >
                        <div className="cart_item_image">
                            <img src={item.product.product.image} alt="" />
                        </div>
                        <div className="cart_item_name cart_info_col">
                            <div className="cart_item_title">Name</div>
                            <div className="cart_item_text">
                                {item.product.product.name}
                            </div>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                            <div className="cart_item_title">Quantity</div>
                            <div className="cart_item_text">
                                {item.product.quantity}
                            </div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                            <div className="cart_item_title">Price</div>
                            <div className="cart_item_text">
                                &#8377;
                                {item.product.product.price}
                            </div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                            <div className="cart_item_title">Total</div>
                            <div className="cart_item_text">
                                &#8377;
                                {parseInt(item.product.product.price) *
                                    parseInt(item.product.quantity)}
                            </div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                            <div className="cart_item_title">Remove</div>
                            <div
                                className="cart_item_text text-center"
                                onClick={() => {
                                    props.removeFromCart(item);
                                }}
                            >
                                <i className="fa fa-times" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CartItem;
