import React from "react"
import { FormErrors } from './FormErrors';
import userAPI from '../services/userAPI'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            user: '',
            password: '',
            formErrors: { user: '', password: '' },
            userValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userValid = this.state.userValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'user':
                userValid = value.length <= 20;
                fieldValidationErrors.user = userValid ? '' : ' is invalid user';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            userValid: userValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.userValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleLogin() {
        let user = { userName: this.state.user, passWord: this.state.password }
        let isValid = this.state.formValid

        if (isValid) {
            let response = userAPI.login(user)
            if (response) {
                this.setState({ user: '', password: '', })
                this.props.handleCloseModel()
            } else {
                alert('Login thất bại')
                this.setState({ user: '', password: '', })
            }
        }
    }

    render() {
        if (this.props.renderLogin) {
            return (
                <div className="loginForm">
                    <div className="login-page">
                        <div className="login-form">
                            <div className="login-content">
                                <div className="login-title">
                                    <h3>Login</h3>
                                </div>
                                <div className="err-form">
                                    <FormErrors formErrors={this.state.formErrors} />
                                </div>
                                <div className="form-login-group">
                                    <div className={`form-input ${this.errorClass(this.state.formErrors.user)}`}>
                                        <label htmlFor="user">User Name </label>
                                        <input type="text" name="user" placeholder="User Name *" className="user-name"
                                            value={this.state.user}
                                            onChange={this.handleUserInput} />
                                    </div>
                                    <div className={`form-input ${this.errorClass(this.state.formErrors.password)}`}>
                                        <label htmlFor="password">Password </label>
                                        <input type="password" name="password" placeholder="Password *" className="password"
                                            value={this.state.password}
                                            onChange={this.handleUserInput} />
                                    </div>
                                </div>
                                <button className="btn-login-page" onClick={this.handleLogin} disabled={!this.state.formValid}>Login to account</button>
                                <button className="btn-close-page" onClick={this.props.handleCloseModel}></button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }
}

export default Login