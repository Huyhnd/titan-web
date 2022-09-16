import React from "react";
import data from '../../data/enum/enum'

class FooterSupport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footerSupportConfig: data.footerSupportConfig
        }

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="box footer-support">
                <div className="container">
                    <div className="support-content">
                        {
                            this.state.footerSupportConfig.map((item) => {
                                return (
                                    <div key={item.key} className="support-item">
                                        <h3 className="title">{item.title}</h3>
                                        <div className="button-contain">
                                            <div className={item.key}>
                                                {
                                                    item.content.map((item) => {
                                                        return (
                                                            <li key={item.key} className="button">
                                                                <img src={item.image} alt="..." />
                                                                <a href={item.url}>{item.text}</a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterSupport;