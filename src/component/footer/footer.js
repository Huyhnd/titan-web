import React from "react";
import FooterBottom from "./FooterBottom";
import FooterLocation from "./FooterLocation";
import FooterMap from "./FooterMap";
import FooterSupport from "./FooterSupport";

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="footer">
                <FooterMap />
                <FooterLocation />
                <FooterSupport />
                <FooterBottom />
                <span title="Scroll to top" className="back-to-top"></span>
            </div>
        );
    }
}

export default Footer;