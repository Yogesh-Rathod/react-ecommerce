import React from 'react';
import axios from 'axios';

import ShopItem from '../../components/shop-item/item';
import API_URL from '../../environments/environment';

class ProductListing extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            categories: [],
            brands: []
        };
    }

    componentDidMount() {
        axios.get(API_URL.shopUrl).then(res => {
            this.setState({
                products: res.data
            });
            const brands = [];
            this.state.products.map(item => {
                if (brands.indexOf(item.brand) === -1) {
                    brands.push(item.brand);
                }
            });
            const categories = [];
            this.state.products.map(item => {
                item.categories.map(catItem => {
                    if (categories.indexOf(catItem) === -1) {
                        categories.push(catItem);
                    }
                });
            });
            this.setState({
                brands: brands,
                categories: categories
            });
            console.log('this.state ', this.state);
        });
    }

    render() {
        return (
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop_sidebar">
                                <div className="sidebar_section">
                                    <div className="sidebar_title">
                                        Categories
                                    </div>
                                    {this.state.categories &&
                                    this.state.categories.length ? (
                                        <ul className="sidebar_categories">
                                            {this.state.categories.map(
                                                (item, index) => {
                                                    return (
                                                        <li
                                                            className="brand"
                                                            key={index}
                                                        >
                                                            <a href="javascript:void(0)">
                                                                {item}
                                                            </a>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    ) : (
                                        'No Categories!'
                                    )}
                                </div>
                                <div className="sidebar_section filter_by_section">
                                    <div className="sidebar_title">
                                        Filter By
                                    </div>
                                    <div className="sidebar_subtitle">
                                        Price
                                    </div>
                                    <div className="filter_price">
                                        <div
                                            id="slider-range"
                                            className="slider_range"
                                        />
                                        <p>Range: </p>
                                        <p>
                                            <input
                                                type="text"
                                                id="amount"
                                                className="amount"
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className="sidebar_section">
                                    <div className="sidebar_subtitle brands_subtitle">
                                        Brands
                                    </div>
                                    {this.state.brands &&
                                    this.state.brands.length ? (
                                        <ul className="brands_list">
                                            {this.state.brands.map(
                                                (item, index) => {
                                                    return (
                                                        <li
                                                            className="brand"
                                                            key={index}
                                                        >
                                                            <a href="javascript:void(0)">
                                                                {item}
                                                            </a>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    ) : (
                                        'No Brands!'
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="shop_content">
                                <div className="shop_bar clearfix">
                                    <div className="shop_product_count">
                                        <span>
                                            {this.state.products.length}
                                        </span>
                                        Products found
                                    </div>
                                    <div className="shop_sorting">
                                        <span>Sort by:</span>
                                        <ul>
                                            <li>
                                                <span className="sorting_text">
                                                    highest rated
                                                    <i className="fas fa-chevron-down" />
                                                </span>
                                                <ul>
                                                    <li className="shop_sorting_button">
                                                        highest rated
                                                    </li>
                                                    <li className="shop_sorting_button">
                                                        name
                                                    </li>
                                                    <li className="shop_sorting_button">
                                                        price
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product_grid row">
                                    {this.state.products &&
                                    this.state.products.length
                                        ? this.state.products.map(item => {
                                              return (
                                                  <ShopItem
                                                      productInfo={item}
                                                      key={item.id}
                                                  />
                                              );
                                          })
                                        : 'No Products Available!'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductListing;
