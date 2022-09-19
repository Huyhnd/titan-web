import React from "react";
import data from '../../data/enum/enum'

class BodyTestimonial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testimonialTitleConfig: data.testimonialTitleConfig,
            testimonialContentConfig: data.testimonialContentConfig,
            testSliderItemWidth: 0,
            testSliderContainWidth: 0,
            testSliderItemCount: 6,
            currentTestSliderItem: 1
        }
        this.loadTestSlider = this.loadTestSlider.bind(this)
    }

    loadTestSlider() {
        let newTestSliderItemWidth = document.getElementById("testimonials-slider").clientWidth
        this.setState({ testSliderItemWidth: newTestSliderItemWidth, testSliderContainWidth: newTestSliderItemWidth * this.state.testSliderItemCount })
    }

    componentDidMount() {
        window.addEventListener('load', this.loadTestSlider())
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.loadTestSlider())
    }
    //left (0 ( x + 90px)
    render() {
        let { testSliderContainWidth, testSliderItemWidth } = this.state
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
                    <div className="testimonials-slider" id="testimonials-slider">
                        <div className="items-wraper">
                            <div className="slider-items" id="test-slider-wrap" style={{ width: `${testSliderContainWidth}px` }}>
                                {
                                    this.state.testimonialContentConfig.map((item) => {
                                        return (
                                            <div className="slider-item" key={item.key} style={{ width: `${testSliderItemWidth - (+45 * 2)}px` }}>
                                                <div className="testimonials-content">
                                                    <a href={item.url} className="link-to-index">
                                                        <div className="image">
                                                            <img src={item.image} alt="..." />
                                                        </div>
                                                        <h4 className="name">{item.name}</h4>
                                                        <div className="title-border">{item.title}</div>
                                                        <div className="content">
                                                            <blockquote className="grey-color">{item.describe}</blockquote>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="dots">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyTestimonial;
