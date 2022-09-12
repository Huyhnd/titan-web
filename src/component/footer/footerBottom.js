import React from "react";
import data from '../../data/enum/enum'

class FooterBottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footerBottomConfig: data.footerBottomConfig
        }

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="box footer-bottom">
                <div className="container">
                    {
                        this.state.footerBottomConfig.map((item) => {
                            return (
                                <div key={item.key} className="bottom-content">
                                    {
                                        item.copyright.map((item) => {
                                            return (
                                                <div key={item.key} className="copyright">
                                                    <span className="break">{item.break}
                                                        <span className="year">{item.year}</span>
                                                        {item.text}
                                                    </span>
                                                    {item.text1}
                                                    <a href={item.url} className="text-privacy">{item.text2}</a>
                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        item.socials.map((item) => {
                                            return (
                                                <div key={item.key} className="socials">
                                                    <strong>{item.title}</strong>
                                                    {
                                                        item.social.map((item) => {
                                                            return (
                                                                <a key={item.key} href={item.url} className="social-icon">
                                                                    <img src={item.image} alt="..." style={{ width: "28px", height: "30px" }} />
                                                                </a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default FooterBottom;