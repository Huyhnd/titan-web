import React from "react";
import data from '../data/enum/enum'

class BodyServices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bodyContentConfig: data.bodyContentConfig,
            bodyTitleConfig: data.bodyTitleConfig
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div className="box box-1">
                <div className="container">
                    {
                        this.state.bodyTitleConfig.map((item) => {
                            return (
                                <div key={item.key}>
                                    <div className="title-venture">
                                        <h1 className="title">
                                            <a href={item.url}>{item.title}</a>
                                        </h1>
                                    </div>
                                    <div className="describe grey-color">
                                        {item.describe}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="items">
                        {
                            this.state.bodyContentConfig.map((item) => {
                                return (
                                    <div key={item.key} className="item">
                                        <div className="item-title">
                                            <div className="image">
                                                <img src={item.image} alt="..." />
                                            </div>
                                            <h3>{item.contentTitle}</h3>
                                        </div>
                                        <p>{item.contentDescribe}</p>
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

export default BodyServices;
