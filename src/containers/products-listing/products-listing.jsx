import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import ShopItem from '../../components/shop-item/item';
import API_URL from '../../environments/environment';

class ProductListing extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            unFilteredProducts: [],
            categories: [],
            brands: [],
            sort: {
                selected: 'highest rated',
                keys: ['highest rated', 'name', 'price']
            }
        };
    }

    componentDidMount() {
        axios.get(API_URL.shopUrl).then(res => {
            this.setState({
                products: res.data,
                unFilteredProducts: res.data
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

    sortProducts(criteria) {
        let selectedCriteria = { ...this.state.sort };
        selectedCriteria.selected = criteria;
        this.setState({ sort: selectedCriteria });
        this.sortByPrice(criteria);
    }

    sortByPrice(criteria) {
        let sortItem = '';
        let isNameSort = false;
        switch (criteria) {
            case 'price':
                sortItem = 'price';
                break;
            case 'highest rated':
                sortItem = 'popularity';
                break;
            case 'name':
                isNameSort = true;
                sortItem = 'name';
                break;
            default:
                break;
        }
        let sortedProducts = this.state.products.sort((a, b) => {
            if (!isNameSort) {
                return a[sortItem] - b[sortItem];
            } else {
                var nameA = a.name.toLowerCase(),
                    nameB = b.name.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            }
        });
        this.setState({
            products: sortedProducts
        });
    }

    filterByBrand(brand) {
        if (this.state.selectedBrand !== brand) {
            this.setState({ selectedBrand: brand }, () => {
                this.updateProductsWithBrandFilters(brand);
            });
        } else {
            this.setState({ selectedBrand: '' }, () => {
                this.updateProductsWithBrandFilters(brand);
            });
        }
    }

    updateProductsWithBrandFilters(brand) {
        let filteredProducts = this.state.unFilteredProducts.filter(item => {
            if (this.state.selectedBrand) {
                return item.brand === brand;
            } else {
                return item;
            }
        });
        this.setState({
            products: filteredProducts
        });
    }

    filterByCategories(category) {
        if (this.state.selectedCategory !== category) {
            this.setState({ selectedCategory: category }, () => {
                this.updateProductsWithCategoryFilters(category);
            });
        } else {
            this.setState({ selectedCategory: '' }, () => {
                this.updateProductsWithCategoryFilters(category);
            });
        }
    }

    updateProductsWithCategoryFilters(category) {
        let filteredProducts = this.state.unFilteredProducts.filter(item => {
            if (this.state.selectedCategory) {
                if (item.categories.indexOf(category) > -1) {
                    return item;
                }
            } else {
                return item;
            }
        });
        this.setState({
            products: filteredProducts
        });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Product Listing Page</title>
                </Helmet>
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
                                                                className={
                                                                    this.state
                                                                        .selectedCategory ===
                                                                    item
                                                                        ? 'active brand'
                                                                        : 'brand'
                                                                }
                                                                key={index}
                                                            >
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    onClick={() => {
                                                                        this.filterByCategories(
                                                                            item
                                                                        );
                                                                    }}
                                                                >
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
                                                                className={
                                                                    this.state
                                                                        .selectedBrand ===
                                                                    item
                                                                        ? 'active brand'
                                                                        : 'brand'
                                                                }
                                                                key={index}
                                                            >
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    onClick={() => {
                                                                        this.filterByBrand(
                                                                            item
                                                                        );
                                                                    }}
                                                                >
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
                                                        {
                                                            this.state.sort
                                                                .selected
                                                        }
                                                        <i className="fas fa-chevron-down" />
                                                    </span>
                                                    <ul>
                                                        {this.state.sort.keys.map(
                                                            (item, index) => {
                                                                return (
                                                                    <li
                                                                        className="shop_sorting_button"
                                                                        key={
                                                                            index
                                                                        }
                                                                        onClick={() => {
                                                                            this.sortProducts(
                                                                                item
                                                                            );
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                );
                                                            }
                                                        )}
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
            </div>
        );
    }
}

export default ProductListing;
