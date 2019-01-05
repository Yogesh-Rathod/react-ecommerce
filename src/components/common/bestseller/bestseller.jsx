import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Tabs, Tab } from 'react-bootstrap';

import './bestseller.scss';

class BestSeller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
            bestSeller: {}
        };
    }

    componentDidMount() {
        axios.get(`https://api.myjson.com/bins/81wx8`).then(res => {
            this.setState({ bestSeller: res.data });
        });
    }

    handleTabClick(tabIndex) {
        this.setState({ currentTab: tabIndex });
    }

    handleSelect(key) {}

    render() {
        return (
            <div className="best_sellers">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="tabs clearfix tabs-right">
                                <div className="new_arrivals_title">
                                    Hot Best Sellers
                                </div>
                                <ul className="clearfix">
                                    <li
                                        className={
                                            this.state.currentTab === 1
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() => this.handleTabClick(1)}
                                    >
                                        Top 20
                                    </li>
                                    <li
                                        className={
                                            this.state.currentTab === 2
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() => this.handleTabClick(2)}
                                    >
                                        Audio & Video
                                    </li>
                                    <li
                                        className={
                                            this.state.currentTab === 3
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() => this.handleTabClick(3)}
                                    >
                                        Laptops & Computers
                                    </li>
                                </ul>
                                <div className="tabs_line" />
                                <Tabs
                                    activeKey={this.state.currentTab}
                                    defaultActiveKey={1}
                                    onSelect={this.handleSelect}
                                    id="uncontrolled-tab-example"
                                >
                                    <Tab eventKey={1} title="Top 20">
                                        {this.state.bestSeller.top &&
                                        this.state.bestSeller.top.length ? (
                                            <div className="bestsellers_panel panel active row">
                                                {this.state.bestSeller.top.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                className="col-4"
                                                                key={item.id}
                                                            >
                                                                <div className="bestsellers_item discount">
                                                                    <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                        <div className="bestsellers_image">
                                                                            <img
                                                                                src={
                                                                                    item.image
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="bestsellers_content">
                                                                            <div className="bestsellers_category">
                                                                                <a href="javascript:void(0)">
                                                                                    {
                                                                                        item.category
                                                                                    }
                                                                                </a>
                                                                            </div>
                                                                            <div className="bestsellers_name">
                                                                                <Link
                                                                                    to={`/product-details/bestseller-top/${
                                                                                        item.id
                                                                                    }`}
                                                                                >
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </Link>
                                                                            </div>
                                                                            <div className="bestsellers_price discount">
                                                                                &#8377;
                                                                                {
                                                                                    item.price
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bestsellers_fav active">
                                                                        <i className="fas fa-heart" />
                                                                    </div>
                                                                    <div className="bestsellers_marks">
                                                                        <span className="bestsellers_mark bestsellers_discount">
                                                                            {item.discount &&
                                                                            item.discount !==
                                                                                0 ? (
                                                                                <span>
                                                                                    {
                                                                                        item.discount
                                                                                    }
                                                                                </span>
                                                                            ) : (
                                                                                <span>
                                                                                    New
                                                                                </span>
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        ) : (
                                            <div>No Top 20 Available!</div>
                                        )}
                                    </Tab>
                                    <Tab eventKey={2} title="Audio & Video">
                                        {this.state.bestSeller.audioVideo &&
                                        this.state.bestSeller.audioVideo
                                            .length ? (
                                            <div className="bestsellers_panel panel active row">
                                                {this.state.bestSeller.audioVideo.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                className="col-4"
                                                                key={item.id}
                                                            >
                                                                <div className="bestsellers_item discount">
                                                                    <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                        <div className="bestsellers_image">
                                                                            <img
                                                                                src={
                                                                                    item.image
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="bestsellers_content">
                                                                            <div className="bestsellers_category">
                                                                                <a href="javascript:void(0)">
                                                                                    {
                                                                                        item.category
                                                                                    }
                                                                                </a>
                                                                            </div>
                                                                            <div className="bestsellers_name">
                                                                                <Link
                                                                                    to={`/product-details/bestseller-audioVideo/${
                                                                                        item.id
                                                                                    }`}
                                                                                >
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </Link>
                                                                            </div>
                                                                            <div className="bestsellers_price discount">
                                                                                &#8377;
                                                                                {
                                                                                    item.price
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bestsellers_fav active">
                                                                        <i className="fas fa-heart" />
                                                                    </div>
                                                                    <div className="bestsellers_marks">
                                                                        <span className="bestsellers_mark bestsellers_discount">
                                                                            {item.discount &&
                                                                            item.discount !==
                                                                                0 ? (
                                                                                <span>
                                                                                    {
                                                                                        item.discount
                                                                                    }
                                                                                </span>
                                                                            ) : (
                                                                                <span>
                                                                                    New
                                                                                </span>
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        ) : (
                                            <div>No Audio Video Available!</div>
                                        )}
                                    </Tab>
                                    <Tab eventKey={3} title="Laptops">
                                        {this.state.bestSeller.laptops &&
                                        this.state.bestSeller.laptops.length ? (
                                            <div className="bestsellers_panel panel active row">
                                                {this.state.bestSeller.laptops.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                className="col-4"
                                                                key={item.id}
                                                            >
                                                                <div className="bestsellers_item discount">
                                                                    <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                                                        <div className="bestsellers_image">
                                                                            <img
                                                                                src={
                                                                                    item.image
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="bestsellers_content">
                                                                            <div className="bestsellers_category">
                                                                                <a href="javascript:void(0)">
                                                                                    {
                                                                                        item.category
                                                                                    }
                                                                                </a>
                                                                            </div>
                                                                            <div className="bestsellers_name">
                                                                                <Link
                                                                                    to={`/product-details/bestseller-laptops/${
                                                                                        item.id
                                                                                    }`}
                                                                                >
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </Link>
                                                                            </div>
                                                                            <div className="bestsellers_price discount">
                                                                                &#8377;
                                                                                {
                                                                                    item.price
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bestsellers_fav active">
                                                                        <i className="fas fa-heart" />
                                                                    </div>
                                                                    <div className="bestsellers_marks">
                                                                        <span className="bestsellers_mark bestsellers_discount">
                                                                            {item.discount &&
                                                                            item.discount !==
                                                                                0 ? (
                                                                                <span>
                                                                                    {
                                                                                        item.discount
                                                                                    }
                                                                                </span>
                                                                            ) : (
                                                                                <span>
                                                                                    New
                                                                                </span>
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        ) : (
                                            <div>No Laptops Available!</div>
                                        )}
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BestSeller;
