import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import banner_background from '../../../assets/images/banner_background.jpg';
import { Link } from 'react-router-dom';

class Banners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        };
    }

    componentDidMount() {
        axios.get(`https://api.myjson.com/bins/rff9g`).then(res => {
            this.setState({ banners: res.data });
        });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="banner">
                <div
                    className="banner_background"
                    style={{ backgroundImage: `url(${banner_background})` }}
                />
                <div className="container fill_height">
                    {this.state.banners && this.state.banners.length ? (
                        <Slider {...settings}>
                            {this.state.banners.map((item, index) => {
                                return (
                                    <div
                                        className="row fill_height"
                                        key={item.id}
                                    >
                                        <div>
                                            <div className="banner_product_image">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="col-lg-5 offset-lg-4 fill_height">
                                                <div className="banner_content">
                                                    <h1 className="banner_text">
                                                        {item.title}
                                                    </h1>
                                                    <div className="banner_price">
                                                        <span>
                                                            &#8377;
                                                            {item.oldPrice}
                                                        </span>
                                                        &#8377; {item.price}
                                                    </div>
                                                    <div className="banner_product_name">
                                                        {item.name}
                                                    </div>
                                                    <div className="button banner_button">
                                                        <Link
                                                            to={`product-details/banner/${
                                                                item.id
                                                            }`}
                                                        >
                                                            Shop Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    ) : (
                        <div>Banners Not Available!</div>
                    )}
                </div>
            </div>
        );
    }
}

export default Banners;
