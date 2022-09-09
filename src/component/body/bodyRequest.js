import React from "react";
import data from '../../data/enum/enum'

class BodyRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            requestTitleConfig: data.requestTitleConfig
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="box body-request">
                <div className="container">
                    {
                        this.state.requestTitleConfig.map((item) => {
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

                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyRequest;
