import React from "react"
import userAPI from '../services/userAPI'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    validateForm() {
        return true
    }

    handleLogin() {
        let user = { userName: 'Huy', passWord: '123456' }
        let isValid = this.validateForm(user)

        if (isValid) {
            let response = userAPI.login(user)
            if (response) {
                alert('Login thành công')
                this.props.handleCloseModal()
            } else {
                alert('Login thất bại')
            }
        }
    }

    render() {
        if (this.props.renderLogin) {
            return (
                <div className="login-page">
                    <div className="login-form">
                        <div className="login-content">
                            <div className="login-title">
                                <h3>Login</h3>
                            </div>
                            <form>
                                <div className="form-login-group">
                                    <div className="form-input">
                                        <label for="userName">User Name </label>
                                        <input type="text" name="userName" placeholder="User Name *" className="user-name" />
                                    </div>
                                    <div className="form-input">
                                        <label for="password">Password </label>
                                        <input type="text" name="password" placeholder="Password *" className="password" />
                                    </div>
                                </div>
                                <button className="btn-login-page" onClick={this.handleLogin}>Login to account</button>
                                <button className="btn-close-page" onClick={this.props.handleCloseModal}></button>
                            </form>
                        </div>

                    </div>
                </div>
            )
        }
        return null
    }
}

export default Login