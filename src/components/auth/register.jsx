import React from 'react';
import { Helmet } from 'react-helmet';

import './login.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: { email: '', password: '', confirmPassword: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
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
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(
                    /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                );
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid
                    ? ''
                    : ' is too short';
                break;
            case 'confirmPassword':
                // this.state.password = value;
                confirmPasswordValid = value === this.state.password;
                fieldValidationErrors.confirmPassword = confirmPasswordValid
                    ? ''
                    : ' do not match';
                break;
            default:
                break;
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                emailValid: emailValid,
                passwordValid: passwordValid,
                confirmPasswordValid: confirmPasswordValid
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formValid:
                this.state.emailValid &&
                this.state.passwordValid &&
                this.state.confirmPasswordValid
        });
    }

    errorClass(error) {
        return error.length === 0 ? '' : 'has-error';
    }

    render() {
        return (
            <div id="LoginForm">
                <Helmet>
                    <title>Register Page</title>
                </Helmet>
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2>Register</h2>
                            </div>
                            <form id="Register" action="javascript:void(0)">
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
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className={`form-control
                                                ${this.errorClass(
                                                    this.state.formErrors
                                                        .confirmPassword
                                                )}`}
                                        id="inputConfirmPassword"
                                        placeholder="Confirm Password"
                                        value={this.state.confirmPassword}
                                        onChange={event =>
                                            this.handleUserInput(event)
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!this.state.formValid}
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Register };
