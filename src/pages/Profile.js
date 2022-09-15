import React from "react";
import userAPI from '../services/userAPI'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleLogout() {
        let response = userAPI.logout()
        if (response) {
            this.props.handleLogoutModel()
        } else {
            alert('Logout thất bại')
        }

    }

    render() {
        if (this.props.renderProfile) {
            return (
                <div className="profile-form">
                    <div className="profile-contain">
                        <button className="btn-logout-page" onClick={this.handleLogout}>Logout</button>
                        <button className="btn-close-page" onClick={this.props.handleLogoutModel}></button>
                    </div>
                </div>
            )
        }
        return null
    }
}

export default Profile