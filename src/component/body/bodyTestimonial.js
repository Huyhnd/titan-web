import React from "react";
import data from '../../data/enum/enum'

class BodyTestimonial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testimonialTitleConfig: data.testimonialTitleConfig
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="box body-testimonial">
                <div className="container">
                    {
                        this.state.testimonialTitleConfig.map((item) => {
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

export default BodyTestimonial;
