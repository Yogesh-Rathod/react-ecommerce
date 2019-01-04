import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

class RecentViews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recents: []
        };
    }

    componentDidMount() {
        axios.get(`https://api.myjson.com/bins/yags4`).then(res => {
            this.setState({ recents: res.data });
        });
    }

    slideChannge(type) {
        switch (type) {
            case 'next':
                this.slider.slickNext();
                break;
            case 'prev':
                this.slider.slickPrev();
                break;
            default:
                break;
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <div className="viewed">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="viewed_title_container">
                                <h3 className="viewed_title">
                                    Recently Viewed
                                </h3>
                                <div className="viewed_nav_container">
                                    <div
                                        className="viewed_nav viewed_prev"
                                        onClick={() => {
                                            this.slideChannge('prev');
                                        }}
                                    >
                                        <i className="fas fa-chevron-left" />
                                    </div>
                                    <div
                                        className="viewed_nav viewed_next"
                                        onClick={() => {
                                            this.slideChannge('next');
                                        }}
                                    >
                                        <i className="fas fa-chevron-right" />
                                    </div>
                                </div>
                            </div>

                            <div className="viewed_slider_container">
                                {this.state.recents &&
                                this.state.recents.length ? (
                                    <Slider
                                        ref={c => (this.slider = c)}
                                        {...settings}
                                        className="owl-carousel owl-theme viewed_slider row"
                                    >
                                        {this.state.recents.map(item => {
                                            return (
                                                <div
                                                    className="owl-item col"
                                                    key={item.id}
                                                >
                                                    <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                        <div className="viewed_image">
                                                            <img
                                                                src={item.image}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="viewed_content text-center">
                                                            <div className="viewed_price">
                                                                &#8377;
                                                                {item.price}
                                                            </div>
                                                            <div className="viewed_name">
                                                                <Link
                                                                    to={`/product-details/recents/${
                                                                        item.id
                                                                    }`}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <ul className="item_marks">
                                                            <li className="item_mark item_discount">
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
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                ) : (
                                    <div>No Recents Available!</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentViews;
