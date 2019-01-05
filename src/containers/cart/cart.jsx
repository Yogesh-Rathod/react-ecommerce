import React from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import RecentViews from '../../components/common/recents/recents';
import NewsLetter from '../../components/common/newsletter/newsletter';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/index';
import CartItem from '../../components/cart-item/cart-tem';

class Cart extends React.Component {
    checkOut() {
        toast.success('Successfully checked out!');
    }

    removeFromCart(_removedItem) {
        this.props.removeFromCart({
            type: 'REMOVE_FROM_CART',
            id: _removedItem.id,
            _removedItem
        });
        toast.success('Successfully removed from cart.');
    }

    render() {
        const show = {
            display:
                this.props.cartProducts.Cart &&
                this.props.cartProducts.Cart.length
                    ? 'block'
                    : 'none'
        };

        let totalOrderTotal = 0;
        if (show.display === 'block') {
            this.props.cartProducts.Cart.map(item => {
                totalOrderTotal +=
                    parseInt(item.product.product.price) *
                    parseInt(item.product.quantity);
                return totalOrderTotal;
            });
        }

        return (
            <div>
                <Helmet>
                    <title>Cart Page</title>
                </Helmet>
                <Header />
                <ToastContainer />

                <div className="cart_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="cart_container">
                                    <div className="cart_title">
                                        Shopping Cart
                                    </div>
                                    <div className="cart_items">
                                        <ul className="cart_list">
                                            <li className="cart_item clearfix">
                                                {show.display === 'block' ? (
                                                    <CartItem
                                                        cartItems={
                                                            this.props
                                                                .cartProducts
                                                        }
                                                        removeFromCart={this.removeFromCart.bind(
                                                            this
                                                        )}
                                                    />
                                                ) : (
                                                    <div>
                                                        <h4>
                                                            There are no
                                                            products in cart!
                                                        </h4>
                                                    </div>
                                                )}
                                                <div />
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="order_total" style={show}>
                                        <div className="order_total_content text-md-right">
                                            <div className="order_total_title">
                                                Order Total:
                                            </div>
                                            <div className="order_total_amount">
                                                &#8377; {totalOrderTotal}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cart_buttons" style={show}>
                                        <button
                                            type="button"
                                            className="button cart_button_checkout"
                                            onClick={this.checkOut.bind(this)}
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RecentViews />
                <NewsLetter />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { cartProducts: state };
};

const mapDispatchToProps = dispatch => ({
    removeFromCart: product => {
        dispatch(removeFromCart(product));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
