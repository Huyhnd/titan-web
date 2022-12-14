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
            currentTestSliderItem: 0,
            prevItem: 0,
            itemLocation: []
        }

        this.loadTestSlider = this.loadTestSlider.bind(this)
        this.dotClick = this.dotClick.bind(this)
        this.animateSlider = this.animateSlider.bind(this)
    }

    loadTestSlider() {
        let newTestSliderItemWidth = document.getElementById("testimonials-slider").clientWidth
        this.setState({ testSliderItemWidth: newTestSliderItemWidth, testSliderContainWidth: newTestSliderItemWidth * this.state.testSliderItemCount, prevImg: this.state.testSliderItemCount - 1 },
            () => {
                let leftPositions = []
                for (let i = 0; i < this.state.testSliderItemCount; i++) {
                    leftPositions.push(i * this.state.testSliderItemWidth)
                }
                this.setState({ itemLocation: leftPositions })
            })

        let slider = document.getElementById("testimonials-slider");
        let dots = slider.querySelector(".dots");
        // Creates dots and add listeners to them
        for (let i = 0; i < this.state.testSliderItemCount; ++i) {
            let dot = document.createElement("div");
            dot.classList.add("dot");
            dots.appendChild(dot);
            dot.addEventListener("click", this.dotClick.bind(null, i), false);
        }
        let allDots = dots.querySelectorAll(".dot");
        allDots[this.state.currentTestSliderItem].classList.add("active-dot");
    }

    animateSlider(nextImg, right) {
        let slider = document.getElementById("testimonials-slider");
        let sliderImgs = slider.querySelectorAll(".slider-item");
        let testSliderElement = document.getElementById("test-slider-wrap")
        let dots = slider.querySelector(".dots");
        let allDots = dots.querySelectorAll(".dot");

        if (!nextImg)
            nextImg = this.state.currentTestSliderItem + 1 < sliderImgs.length ? this.state.currentTestSliderItem + 2 : 1;
        --nextImg;

        sliderImgs[this.state.prevItem].style.animationName = "";

        if (!right) {
            testSliderElement.style.left = "-" + this.state.itemLocation[nextImg] + "px"
        }
        else {
            testSliderElement.style.left = "-" + this.state.itemLocation[nextImg] + "px"
        }

        this.setState({ prevItem: this.state.currentTestSliderItem, currentTestSliderItem: nextImg }, () => {
            let currDot = allDots[this.state.currentTestSliderItem];
            currDot.classList.add("active-dot");
            let prevDot = allDots[this.state.prevItem];
            prevDot.classList.remove("active-dot");
        })
    }

    dotClick(num) {
        let currImg = this.state.currentTestSliderItem
        if (num === currImg)
            return false;
        if (num > currImg) {
            this.animateSlider(num + 1);
        }

        else {
            this.animateSlider(num + 1, true);
        }

    }

    componentDidMount() {
        window.addEventListener('load', this.loadTestSlider())
        this.autoSlide = setInterval(
            () => this.dotClick(),
            2000
        );
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.loadTestSlider())
        clearInterval(this.autoSlide)
    }

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
                        <div className="slider-controler">
                            <div className="slider-pagination">
                                <div className="dots">

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default BodyTestimonial;
