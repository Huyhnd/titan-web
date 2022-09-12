import React from "react";
import FooterBottom from "./footerBottom";
import FooterLocation from "./footerLocation";
import FooterMap from "./footerMap";
import FooterSupport from "./footerSupport";

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