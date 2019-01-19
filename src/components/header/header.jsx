import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import phone from '../../assets/images/phone.png';
import mail from '../../assets/images/mail.png';
import user from '../../assets/images/user.svg';
import search from '../../assets/images/search.png';
import phone_white from '../../assets/images/phone_white.png';
import mail_white from '../../assets/images/mail_white.png';
import CartCount from './cart-count/cart-count';
import Categories from './categories/categories';
import Menus from './menus/menus';
import API_URL from '../../environments/environment';
import { removeToken } from '../../actions/index';
import WishList from './wishlist/wishlist';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showCategories: false,
            categories: [],
            menus: []
        };
    }

    logout() {
        axios.post(API_URL.loginUrl + 'logout', {}).then(res => {
            if (res.status === 200) {
                this.props.removeToken({
                    type: 'REMOVE_TOKEN',
                    token: this.props.state.Token
                });
                toast.success('Successfully loggedout.');
            }
        });
    }

    componentDidMount() {
        axios.get(API_URL.categories).then(res => {
            this.setState({
                categories: res.data.categories,
                menus: res.data.menus
            });
        });
    }

    categoriesClicked() {
        this.setState({
            showCategories: !this.state.showCategories
        });
    }

    render() {
        const show = {
            display: this.state.showCategories ? 'block' : 'none'
        };
        const isLoogedIn =
            this.props.state.Token &&
            this.props.state.Token.length &&
            this.props.state.Token[0].isLoggedIn ? (
                <div>
                    <a
                        href="javascript:void(0)"
                        onClick={this.logout.bind(this)}
                    >
                        Logout
                    </a>
                </div>
            ) : (
                <div>
                    <div>
                        <Link to={`/register`}>Register</Link>
                    </div>
                    <div>
                        <Link to={`/sign-in`}>Login</Link>
                    </div>
                </div>
            );

        return (
            <header className="header">
                <ToastContainer />
                <div className="top_bar">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <div className="top_bar_contact_item">
                                    <div className="top_bar_icon">
                                        <img src={phone} alt="" />
                                    </div>
                                    +38 068 005 3570
                                </div>
                                <div className="top_bar_contact_item">
                                    <div className="top_bar_icon">
                                        <img src={mail} alt="" />
                                    </div>
                                    <a href="mailto:fastsales@gmail.com">
                                        fastsales@gmail.com
                                    </a>
                                </div>
                                <div className="top_bar_content ml-auto">
                                    <div className="top_bar_menu">
                                        <ul className="standard_dropdown top_bar_dropdown">
                                            <li>
                                                <a href="javascript:void(0)">
                                                    English
                                                    <i className="fas fa-chevron-down" />
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Italian
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Spanish
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Japanese
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    &#8377; INR
                                                    <i className="fas fa-chevron-down" />
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            INR
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            EUR Euro
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            GBP British Pound
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            JPY Japanese Yen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="top_bar_user">
                                        <div className="user_icon">
                                            <img src={user} alt="" />
                                        </div>
                                        {isLoogedIn}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-3 col-3 order-1">
                                <div className="logo_container">
                                    <div className="logo">
                                        <Link to={`/`}>OneTech</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                                <div className="header_search">
                                    <div className="header_search_content">
                                        <div className="header_search_form_container">
                                            <form
                                                action="#"
                                                className="header_search_form clearfix"
                                            >
                                                <input
                                                    type="search"
                                                    required="required"
                                                    className="header_search_input"
                                                    placeholder="Search for products..."
                                                />
                                                <button
                                                    type="submit"
                                                    className="header_search_button trans_300"
                                                    value="Submit"
                                                >
                                                    <img src={search} alt="" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                    <WishList cart={this.props.state} />
                                    <CartCount cart={this.props.state} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="main_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="main_nav_content d-flex flex-row">
                                    <div
                                        className="cat_menu_container"
                                        onClick={this.categoriesClicked.bind(
                                            this
                                        )}
                                    >
                                        <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                            <div className="cat_burger">
                                                <span />
                                                <span />
                                                <span />
                                            </div>
                                            <div className="cat_menu_text">
                                                categories
                                            </div>
                                        </div>

                                        <Categories
                                            show={show}
                                            categories={this.state.categories}
                                        />
                                    </div>

                                    <div className="main_nav_menu ml-auto">
                                        <Menus menus={this.state.menus} />
                                    </div>

                                    <div className="menu_trigger_container ml-auto">
                                        <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                            <div className="menu_burger">
                                                <div className="menu_trigger_text">
                                                    menu
                                                </div>
                                                <div className="cat_burger menu_burger_inner">
                                                    <span />
                                                    <span />
                                                    <span />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="page_menu">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page_menu_content">
                                    <div className="page_menu_search">
                                        <form action="#">
                                            <input
                                                type="search"
                                                required="required"
                                                className="page_menu_search_input"
                                                placeholder="Search for products..."
                                            />
                                        </form>
                                    </div>
                                    <ul className="page_menu_nav">
                                        <li className="page_menu_item has-children">
                                            <a href="javascript:void(0)">
                                                Language
                                                <i className="fa fa-angle-down" />
                                            </a>
                                            <ul className="page_menu_selection">
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        English
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Italian
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Spanish
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Japanese
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item has-children">
                                            <a href="javascript:void(0)">
                                                Currency
                                                <i className="fa fa-angle-down" />
                                            </a>
                                            <ul className="page_menu_selection">
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        US Dollar
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        EUR Euro
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        GBP British Pound
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        JPY Japanese Yen
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item">
                                            <Link to={`/`}>Home</Link>
                                        </li>
                                        <li className="page_menu_item has-children">
                                            <a href="javascript:void(0)">
                                                Super Deals
                                                <i className="fa fa-angle-down" />
                                            </a>
                                            <ul className="page_menu_selection">
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Super Deals
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li className="page_menu_item has-children">
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item has-children">
                                            <a href="javascript:void(0)">
                                                Featured Brands
                                                <i className="fa fa-angle-down" />
                                            </a>
                                            <ul className="page_menu_selection">
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Featured Brands
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item has-children">
                                            <a href="javascript:void(0)">
                                                Trending Styles
                                                <i className="fa fa-angle-down" />
                                            </a>
                                            <ul className="page_menu_selection">
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Trending Styles
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        Menu Item
                                                        <i className="fa fa-angle-down" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item">
                                            <a href="blog.html">
                                                blog
                                                <i className="fa fa-angle-down" />
                                            </a>
                                        </li>
                                        <li className="page_menu_item">
                                            <a href="contact.html">
                                                contact
                                                <i className="fa fa-angle-down" />
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="menu_contact">
                                        <div className="menu_contact_item">
                                            <div className="menu_contact_icon">
                                                <img src={phone_white} alt="" />
                                            </div>
                                            +38 068 005 3570
                                        </div>
                                        <div className="menu_contact_item">
                                            <div className="menu_contact_icon">
                                                <img src={mail_white} alt="" />
                                            </div>
                                            <a href="mailto:fastsales@gmail.com">
                                                fastsales@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return { state: state };
};

const mapDispatchToProps = dispatch => ({
    removeToken: token => {
        dispatch(removeToken(token));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
