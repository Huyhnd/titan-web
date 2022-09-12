import React from "react";
import data from '../../data/enum/enum'

class FooterMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footerMapConfig: data.footerMapConfig
        }

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="box footer-google-map">
                <div className="container">
                    <div className="map-content">
                        {
                            this.state.footerMapConfig.map((item) => {
                                return (
                                    <div key={item.key} className={item.key}>
                                        <a href={item.url}>
                                            <span>{item.text}</span>
                                            <img src={item.image} alt="" style={{ height: "20px" }} />
                                        </a>
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

export default FooterMap;