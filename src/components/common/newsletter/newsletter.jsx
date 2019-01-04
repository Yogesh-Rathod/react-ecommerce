import React from 'react';

import send from '../../../assets/images/send.png';

class NewsLetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailValid: false
        };
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        let emailValid = this.state.emailValid;
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? true
            : false;
        this.setState({ [name]: value, emailValid: emailValid });
    }

    render() {
        return (
            <div className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                                <div className="newsletter_title_container">
                                    <div className="newsletter_icon">
                                        <img src={send} alt="" />
                                    </div>
                                    <div className="newsletter_title">
                                        Sign up for Newsletter
                                    </div>
                                    <div className="newsletter_text">
                                        <p>
                                            ...and receive %20 coupon for first
                                            shopping.
                                        </p>
                                    </div>
                                </div>
                                <div className="newsletter_content clearfix">
                                    <form
                                        action="#"
                                        className="newsletter_form"
                                    >
                                        <input
                                            type="email"
                                            name="email"
                                            className="newsletter_input"
                                            required="required"
                                            placeholder="Enter your email address"
                                            value={this.state.email}
                                            onChange={event =>
                                                this.handleUserInput(event)
                                            }
                                        />
                                        <button
                                            className="newsletter_button"
                                            disabled={!this.state.emailValid}
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                    <div className="newsletter_unsubscribe_link">
                                        <a href="javascript:void(0)">unsubscribe</a>
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

export default NewsLetter;
