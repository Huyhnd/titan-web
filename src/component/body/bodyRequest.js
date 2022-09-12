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
                    <div className="submitContactForm">
                        <div className="form-contact-contain">
                            <div className="form-item">
                                <div className="form-group">
                                    <div className="form-control-wrap name">
                                        <input type="text" name="name" placeholder="Name *" max-length="100" className="form-control required" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-control-wrap email">
                                        <input type="email" name="email" placeholder="Email *" max-length="255" className="is-email form-control required" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-control-wrap phone">
                                        <input type="tel" name="phone" placeholder="Phone" max-length="20" className="is-numeric form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-group">
                                    <div className="form-control-wrap subject">
                                        <input type="text" name="subject" placeholder="Subject *" className="form-control required" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-control-wrap mesage">
                                        <textarea name="message" placeholder="You're looking for *" className="form-control required"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-group">
                                    <div className="recapcha">

                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-control-wrap">

                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="button-container">
                                        <button id="btnSubmitContact" type="submit" className="button-default request-button">Request Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyRequest;
