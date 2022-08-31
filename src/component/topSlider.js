import React from "react";
import data from '../data/enum/enum'

class TopSlider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            topSliderConfig: data.topSliderConfig,
            topSliderItemWidth: 0,
            topSliderItemCount: 4,
            currentTopSliderItem: 1
        }

        this.loadTopSlider = this.loadTopSlider.bind(this)
        this.backTopSlider = this.backTopSlider.bind(this)
        this.nextTopSlider = this.nextTopSlider.bind(this)
    }

    loadTopSlider() {
        let topSlider = document.getElementById("top-slider")
        if (topSlider) {
            topSlider.style.width = this.topSliderItemWidth * this.topSliderItemCount + "px"
        }
    }

    backTopSlider() {
        if (this.currentTopSliderItem === 1) {
            this.currentTopSliderItem = this.topSliderItemCount
        } else {
            this.currentTopSliderItem--
        }
        let leftPosition = (this.currentTopSliderItem - 1) * this.topSliderItemWidth
        let sliderElement = document.getElementById("top-slider")
        if (sliderElement) {
            if (this.currentTopSliderItem === 1) {
                sliderElement.style.left = "0"
            } else {
                sliderElement.style.left = "-" + leftPosition + "px"
            }
        }

        let pagingElement = document.getElementById("slider-paging")
        if (pagingElement) {
            pagingElement.innerHTML = this.currentTopSliderItem + "/" + this.topSliderItemCount
        }
    }

    nextTopSlider() {
        if (this.currentTopSliderItem === this.topSliderItemCount) {
            this.currentTopSliderItem = 1
        } else {
            this.currentTopSliderItem++
        }
        let leftPosition = (this.currentTopSliderItem - 1) * this.topSliderItemWidth
        let sliderElement = document.getElementById("top-slider")
        if (sliderElement) {
            if (this.currentTopSliderItem === 1) {
                sliderElement.style.left = "0"
            } else {
                sliderElement.style.left = "-" + leftPosition + "px"
            }
        }

        let pagingElement = document.getElementById("slider-paging")
        if (pagingElement) {
            pagingElement.innerHTML = this.currentTopSliderItem + "/" + this.topSliderItemCount
        }
    }

    componentDidMount() {
        this.setState(() => ({
            topSliderItemWidth: document.getElementsByClassName("slide-item")[0].clientWidth
        }))
        console.log(this.state.topSliderItemWidth)
        window.addEventListener('load', this.loadTopSlider())
        // this.autoSlide = setInterval(
        //     () => this.nextTopSlider(),
        //     2000
        // );
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.loadTopSlider())
        // clearInterval(this.autoSlide)
    }

    render() {
        return (
            <div className="slider">
                <div className="slides" id="top-slider">
                    {
                        this.state.topSliderConfig.map((item, index) => {
                            return (
                                <div key={item.key} className={`slide-item item${index + 1}`}>
                                    <div className="slide-content">
                                        <h1 className="title">
                                            {item.title} <span>{item.title2}</span>
                                        </h1>
                                        <p>{item.describe}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="slider-actions">
                    <button className="btn-previus" onClick={() => this.backTopSlider()}>
                        <img src={this.props.images.prevImg} alt="previmg" />
                    </button>
                    <span id="slider-paging">1/4</span>
                    <button className="btn-next" onClick={() => this.nextTopSlider()}>
                        <img src={this.props.images.nextImg} alt="next-img" />
                    </button>
                </div>
            </div>
        );
    }
}

export default TopSlider;