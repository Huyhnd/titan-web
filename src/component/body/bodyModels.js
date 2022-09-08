import React from "react";
import data from '../../data/enum/enum'

class BodyModel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modelTitleConfig: data.modelTitleConfig,
            modelContentConfig: data.modelContentConfig
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div className="box model-box">
                <div className="container">
                    {
                        this.state.modelTitleConfig.map((item) => {
                            return (
                                <div key={item.key} >
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
                            this.state.modelContentConfig.map((item) => {
                                return (
                                    <div key={item.key} className="item">
                                        <div className="item-title">
                                            <div className="image">
                                                <img src={item.image} alt="..." />
                                            </div>
                                            <h3 className="with-border-bottom">{item.contentTitle}</h3>
                                        </div>
                                        <ul className="models-content">
                                            {
                                                item.content.map((item) => {
                                                    return (
                                                        <li key={item.key}>{item.content}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyModel;