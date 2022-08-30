import React from "react";

class BodyServices extends React.Component {
    constructor(props) {
        super(props)
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
                        this.props.bodyTitleConfig.map((item) => {
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
                            this.props.bodyContentConfig.map((item) => {
                                return (
                                    <div key={item.key} className="item">
                                        <div className="image">
                                            <img src={item.image} alt="image" />
                                        </div>
                                        <h3>{item.contentTitle}</h3>
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
