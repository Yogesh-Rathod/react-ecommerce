import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToken } from '../../actions/index';
import API_URL from '../../environments/environment';
import './login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
    }

    componentDidMount() {
        console.log('this.props.auth ', this.props.auth);
    }

    handleSubmit() {
        const requestObject = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post(API_URL.loginUrl + 'login', requestObject).then(res => {
            if (res.status === 200) {
                this.props.history.push(`/cart`);
                this.props.addToken({
                    type: 'ADD_TOKEN',
                    token: res.data.token
                });
            }
        });
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                // this.state.email = value;
                emailValid = value.match(
                    /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                );
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                // this.state.password = value;
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid
                    ? ''
                    : ' is too short';
                break;
            default:
                break;
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                emailValid: emailValid,
                passwordValid: passwordValid
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid
        });
    }

    errorClass(error) {
        return error.length === 0 ? '' : 'has-error';
    }

    render() {
        return (
            <div id="LoginForm">
                <Helmet>
                    <title>Login Page</title>
                </Helmet>
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2>Login</h2>
                                <p>Please enter your email and password</p>
                            </div>
                            <form
                                id="Login"
                                action="javascript:void(0)"
                                onSubmit={this.handleSubmit.bind(this)}
                            >
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className={`form-control
                                                ${this.errorClass(
                                                    this.state.formErrors.email
                                                )}`}
                                        id="inputEmail"
                                        placeholder="Email Address"
                                        value={this.state.email}
                                        onChange={event =>
                                            this.handleUserInput(event)
                                        }
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        className={`form-control
                                                ${this.errorClass(
                                                    this.state.formErrors
                                                        .password
                                                )}`}
                                        id="inputPassword"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={event =>
                                            this.handleUserInput(event)
                                        }
                                    />
                                </div>
                                <div className="forgot float-left">
                                    <a href="javascript:void(0)">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="forgot float-right">
                                    <Link to={`/register`}>Register</Link>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!this.state.formValid}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state };
};

const mapDispatchToProps = dispatch => ({
    addToken: token => {
        dispatch(addToken(token));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
