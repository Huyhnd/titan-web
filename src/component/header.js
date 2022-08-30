import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.scrollEv = this.scrollEv.bind(this);
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
        return (
            <div className="main-header" id="main-header">
                <a href="/#" className="logo"><img src={this.props.logo} alt="logo" /></a>
                <ul>
                    {
                        this.props.headerConfig.map((item) => {
                            return (
                                < li key={item.key} > <a href={item.href} id={item.id}>{item.text}</a></li>
                            )
                        })
                    }
                    <li><button id="btn-menu" className="btn-menu"></button></li>
                </ul>
            </div >
        );
    }
}

export default Header;
