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
        let newTopSliderItemWidth = document.getElementsByClassName("slide-item")[0].clientWidth
        this.setState({ topSliderItemWidth: newTopSliderItemWidth }, () => {
            let topSlider = document.getElementById("top-slider")
            if (topSlider) {
                topSlider.style.width = (this.state.topSliderItemWidth * this.state.topSliderItemCount) + 'px'
            }
        })

    }

    backTopSlider() {
        let currentTopSliderItem = this.state.currentTopSliderItem
        if (currentTopSliderItem === 1) {
            currentTopSliderItem = this.state.topSliderItemCount
        } else {
            currentTopSliderItem--
        }

        this.setState({ currentTopSliderItem: currentTopSliderItem }, () => {
            let leftPosition = (this.state.currentTopSliderItem - 1) * this.state.topSliderItemWidth
            let sliderElement = document.getElementById("top-slider")
            if (sliderElement) {
                if (this.state.currentTopSliderItem === 1) {
                    sliderElement.style.left = "0"
                } else {
                    sliderElement.style.left = "-" + leftPosition + "px"
                }
            }

            let pagingElement = document.getElementById("slider-paging")
            if (pagingElement) {
                pagingElement.innerHTML = currentTopSliderItem + "/" + this.state.topSliderItemCount
            }
        })
    }

    nextTopSlider() {
        let currentTopSliderItem = this.state.currentTopSliderItem
        if (currentTopSliderItem === this.state.topSliderItemCount) {
            currentTopSliderItem = 1
        } else {
            currentTopSliderItem++
        }

        this.setState({ currentTopSliderItem: currentTopSliderItem }, () => {
            let leftPosition = (currentTopSliderItem - 1) * this.state.topSliderItemWidth
            let sliderElement = document.getElementById("top-slider")
            if (sliderElement) {
                if (currentTopSliderItem === 1) {
                    sliderElement.style.left = "0"
                } else {
                    sliderElement.style.left = "-" + leftPosition + "px"
                }
            }

            let pagingElement = document.getElementById("slider-paging")
            if (pagingElement) {
                pagingElement.innerHTML = currentTopSliderItem + "/" + this.state.topSliderItemCount
            }
        })
    }

    componentDidMount() {
        window.addEventListener('load', this.loadTopSlider())
        this.autoSlide = setInterval(
            () => this.nextTopSlider(),
            2000
        );
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.loadTopSlider())
        clearInterval(this.autoSlide)
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