import React from "react";
import data from '../data/json/headerdata.json'
import logo from '../data/image/logo/logo-white.png'

class Header extends React.Component {

    render() {
        return (
            <div className="main-header" id="main-header">
                <a href={data.logo.href} className={data.logo.class}><img src={logo} alt={data.logo.alt} /></a>
                <ul>
                    <li><a href={data.home.href}>{data.home.text}</a></li>
                    <li><a href={data.language.href} id={data.language.id}>{data.language.text}</a></li>
                    <li><button id="btn-menu" className="btn-menu"></button></li>
                </ul>
            </div>
        );
    }
}

export default Header;
