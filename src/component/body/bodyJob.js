import React from "react";
import data from '../../data/enum/enum'

class BodyJob extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jobTitleConfig: data.jobTitleConfig,
            jobContentConfig: data.jobContentConfig
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="box body-job">
                <div className="container">
                    {
                        this.state.jobTitleConfig.map((item) => {
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
                            this.state.jobContentConfig.map((item) => {
                                return (
                                    <div key={item.key} className="job-item">
                                        <div className="image">
                                            <a href={item.url}>
                                                <img src={item.image} alt="..." />
                                            </a>
                                        </div>
                                        <div className="content">
                                            {
                                                item.contentDescribe.map((item) => {
                                                    return (
                                                        <div key={item.key} className="main-content">
                                                            <p>{item.content}</p>
                                                            <button className="btn-join">{item.button}</button>
                                                        </div>
                                                    )
                                                })
                                            }

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

export default BodyJob;
