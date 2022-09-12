import React from "react";
import data from '../../data/enum/enum'

class FooterLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footerLocationConfig: data.footerLocationConfig
        }

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="box footer-location">
                <div className="container">
                    <div className="location-content">
                        {
                            this.state.footerLocationConfig.map((item) => {
                                return (
                                    <div key={item.key} className="location-item">
                                        <h3 className="title">{item.title}</h3>
                                        <p className="content">
                                            <li>{item.content}</li>
                                            <a href={item.url}>{item.tel}</a>
                                        </p>
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

export default FooterLocation;