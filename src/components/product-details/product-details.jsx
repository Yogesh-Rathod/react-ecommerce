import React from 'react';
import { Helmet } from 'react-helmet';
import NewsLetter from '../common/newsletter/newsletter';
import RecentViews from '../common/recents/recents';
import Header from '../header/header';
import Footer from '../footer/footer';
import axios from 'axios';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInfo: {},
            sliderImage: [],
            currentImage: '',
            quantity: 1
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.setState({
                productInfo: {},
                sliderImage: [],
                currentImage: '',
                quantity: 1
            });
            this.componentDidMount();
        }
    }

    componentDidMount() {
        let url = '',
            productType = '',
            bestSellerType = '';
        if (this.props && this.props.match && this.props.match.params) {
            productType = this.props.match.params.type;

            let index = productType.indexOf('-');
            if (index > -1) {
                bestSellerType = productType.substr(
                    index + 1,
                    productType.length
                );
                productType = productType.substr(0, index);
            }

            switch (productType) {
                case 'recents':
                    url = 'https://api.myjson.com/bins/yags4';
                    break;
                case 'banner':
                    url = 'https://api.myjson.com/bins/1e3jnw';
                    break;
                case 'bestseller':
                    url = 'https://api.myjson.com/bins/81wx8';
                    break;
                default:
                    break;
            }
            axios.get(url).then(res => {
                let allProducts = res.data;
                const sliderImages = [];
                let currentProduct = [];
                let arrayToCall = bestSellerType
                    ? allProducts[bestSellerType]
                    : allProducts;
                currentProduct = arrayToCall.filter((product, index) => {
                    sliderImages.push(product.image);
                    if (product.id === parseInt(this.props.match.params.id)) {
                        this.setState({ currentImage: product.image });
                    }
                    return product.id === parseInt(this.props.match.params.id);
                });
                sliderImages.length = 3;
                this.setState({
                    productInfo: currentProduct[0],
                    sliderImages: sliderImages
                });
            });
        }
    }

    updateQuanity(evt) {
        if (evt.target.value <= 5) {
            this.setState({ quantity: evt.target.value });
        } else {
            this.setState({ quantity: 1 });
        }
    }

    increDescQuanity(type) {
        if (this.state.quantity < 5 || type === 'd') {
            switch (type) {
                case 'i':
                    this.setState({ quantity: this.state.quantity + 1 });
                    break;
                case 'd':
                    if (this.state.quantity > 1) {
                        this.setState({ quantity: this.state.quantity - 1 });
                    }
                    break;
                default:
                    break;
            }
        }
    }

    updateCurrentImage(image) {
        this.setState({ currentImage: image });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Product Details</title>
                </Helmet>
                <Header />
                <div className="single_product">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 order-lg-1 order-2">
                                <ul className="image_list">
                                    {this.state.sliderImages &&
                                    this.state.sliderImages.length
                                        ? this.state.sliderImages.map(
                                              (image, index) => {
                                                  return (
                                                      <li
                                                          key={index}
                                                          data-image={image}
                                                          onClick={() => {
                                                              this.updateCurrentImage(
                                                                  image
                                                              );
                                                          }}
                                                      >
                                                          <img
                                                              src={image}
                                                              alt=""
                                                          />
                                                      </li>
                                                  );
                                              }
                                          )
                                        : 'No Images Available'}
                                </ul>
                            </div>

                            <div className="col-lg-5 order-lg-2 order-1">
                                <div className="image_selected">
                                    <img src={this.state.currentImage} alt="" />
                                </div>
                            </div>

                            <div className="col-lg-5 order-3">
                                <div className="product_description">
                                    <div className="product_category">
                                        {this.state.productInfo.name}
                                    </div>
                                    <div className="product_name">
                                        {this.state.productInfo.name}
                                    </div>
                                    <div className="product_text">
                                        <p>
                                            {this.state.productInfo.description}
                                        </p>
                                    </div>
                                    <div className="order_info d-flex flex-row">
                                        <form action="#">
                                            <div
                                                className="clearfix"
                                                // style="z-index: 1000;"
                                            >
                                                <div className="product_quantity clearfix">
                                                    <span>Quantity: </span>
                                                    <input
                                                        id="quantity_input"
                                                        name="quantity_input"
                                                        type="text"
                                                        pattern="[0-9]*"
                                                        value={
                                                            this.state.quantity
                                                        }
                                                        onChange={this.updateQuanity.bind(
                                                            this
                                                        )}
                                                    />
                                                    <div className="quantity_buttons">
                                                        <div
                                                            id="quantity_inc_button"
                                                            className="quantity_inc quantity_control"
                                                            onClick={() => {
                                                                this.increDescQuanity(
                                                                    'i'
                                                                );
                                                            }}
                                                        >
                                                            <i className="fas fa-chevron-up" />
                                                        </div>
                                                        <div
                                                            id="quantity_dec_button"
                                                            className="quantity_dec quantity_control"
                                                            onClick={() => {
                                                                this.increDescQuanity(
                                                                    'd'
                                                                );
                                                            }}
                                                        >
                                                            <i
                                                                className="fas fa-chevron-down"
                                                                name="downArrow"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product_price">
                                                &#8377;
                                                {this.state.productInfo.price
                                                    ? this.state.productInfo
                                                          .price
                                                    : this.state.productInfo
                                                          .newPrice}
                                            </div>
                                            <div className="button_container">
                                                <button
                                                    type="button"
                                                    className="button cart_button"
                                                >
                                                    Add to Cart
                                                </button>
                                                <div className="product_fav">
                                                    <i className="fas fa-heart" />
                                                </div>
                                            </div>
                                        </form>
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

export default ProductDetails;
