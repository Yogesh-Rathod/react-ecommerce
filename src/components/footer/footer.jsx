import React from 'react';

import logo4 from '../../assets/images/logos_4.png';
import logo3 from '../../assets/images/logos_3.png';
import logo2 from '../../assets/images/logos_2.png';
import logo1 from '../../assets/images/logos_2.png';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 footer_col">
                            <div className="footer_column footer_contact">
                                <div className="logo_container">
                                    <div className="logo">
                                        <a href="javascript:void(0)">OneTech</a>
                                    </div>
                                </div>
                                <div className="footer_title">
                                    Got Question? Call Us 24/7
                                </div>
                                <div className="footer_phone">
                                    +38 068 005 3570
                                </div>
                                <div className="footer_contact_text">
                                    <p>17 Princess Road, London</p>
                                    <p>Grester London NW18JR, UK</p>
                                </div>
                                <div className="footer_social">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i className="fab fa-google" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i className="fab fa-vimeo-v" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 offset-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Find it Fast</div>
                                <ul className="footer_list">
                                    <li>
                                        <a href="javascript:void(0)">Computers & Laptops</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Cameras & Photos</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Hardware</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Smartphones & Tablets</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">TV & Audio</a>
                                    </li>
                                </ul>
                                <div className="footer_subtitle">Gadgets</div>
                                <ul className="footer_list">
                                    <li>
                                        <a href="javascript:void(0)">Car Electronics</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer_column">
                                <ul className="footer_list footer_list_2">
                                    <li>
                                        <a href="javascript:void(0)">Video Games & Consoles</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Accessories</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Cameras & Photos</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Hardware</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Computers & Laptops</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">
                                    Customer Care
                                </div>
                                <ul className="footer_list">
                                    <li>
                                        <a href="javascript:void(0)">My Account</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Order Tracking</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Wish List</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Customer Services</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Returns / Exchange</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Product Support</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                    <div className="copyright_content">
                                        <span>
                                            Copyright &copy; All rights
                                            reserved.
                                        </span>
                                    </div>
                                    <div className="logos ml-sm-auto">
                                        <ul className="logos_list">
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <img src={logo1} alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <img src={logo2} alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <img src={logo3} alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <img src={logo4} alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
