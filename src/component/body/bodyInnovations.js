import React from "react";
import data from '../../data/enum/enum'

class BodyInnovation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            innovationTitleConfig: data.innovationTitleConfig,
            innovationContentConfig: data.innovationContentConfig
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div className="box innovation-box">
                <div className="container">
                    {
                        this.state.innovationTitleConfig.map((item) => {
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
                    <div className="item-bg">
                        {
                            this.state.innovationContentConfig.map((item) => {
                                return (
                                    <div key={item.key} className="innovation-item">
                                        <div className="image">
                                            <a href={item.url}>
                                                <img src={item.image} alt="..." />
                                            </a>
                                        </div>
                                        <div className="content">

                                            <p>{item.contentDescribe}</p>
                                        </div>

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

export default BodyInnovation;