import React from "react";
import data from '../../data/enum/enum'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.scrollEv = this.scrollEv.bind(this);
        this.state = {
            headerConfig: data.headerConfig
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollEv)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollEv)
    }

    scrollEv() {
        let mainHeader = document.getElementById("main-header")
        if (mainHeader) {
            if (window.scrollY > 0) {
                if (!mainHeader.classList.contains("scroll")) {
                    mainHeader.classList.add("scroll")
                }
            } else {
                mainHeader.classList.remove("scroll")
            }
        }
    }

    render() {
        let user_login = localStorage.getItem('user_login') || null
        let newUser = JSON.parse(user_login)
        return (
            <div className="main-header" id="main-header">
                <a href="/#" className="logo"><img src={this.props.images.logo} alt="logo" /></a>
                <ul>
                    {
                        this.state.headerConfig.map((item) => {
                            return (
                                < li key={item.key} > <a href={item.url} id={item.id}>{item.text}</a></li>
                            )
                        })
                    }
                    {
                        user_login ?
                            <li><button id="btn-profile" className="btn-login" onClick={this.props.renderProfile}>{newUser.userName}</button></li> :
                            <li><button id="btn-login" className="btn-login" onClick={this.props.renderLogin}>Login</button></li>
                    }
                    <li><button id="btn-menu" className="btn-menu"></button></li>
                </ul>
            </div >
        );
    }
}

export default Header;
