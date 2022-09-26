import React from "react";
import data from '../../data/enum/enum'

class BodyRecognized extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recognizedConfig: data.recognizedConfig,
            recognizedSliderContainWidth: 0,
            recognizedItemWidth: 0,
            recognizedItemCount: 8,
            currentRecognizedSliderItem: 1
        }
        this.loadRecognizedSlide = this.loadRecognizedSlide.bind(this)
        this.nextRecognizedSlider = this.nextRecognizedSlider.bind(this)
    }

    loadRecognizedSlide() {
        let recognizedItemWidth = (document.getElementById("slides-outer").clientWidth) / 5
        this.setState({ recognizedItemWidth: recognizedItemWidth, recognizedSliderContainWidth: recognizedItemWidth * this.state.recognizedItemCount })
    }

    nextRecognizedSlider() {
        let currentRecognizedSliderItem = this.state.currentRecognizedSliderItem
        if (currentRecognizedSliderItem === this.state.recognizedItemCount - 4) {
            currentRecognizedSliderItem = 1
        } else {
            currentRecognizedSliderItem++
        }

        this.setState({ currentRecognizedSliderItem: currentRecognizedSliderItem }, () => {
            let leftPosition = (this.state.currentRecognizedSliderItem - 1) * this.state.recognizedItemWidth
            let recognizedSliderElement = document.getElementById("recognized-slider-items")
            if (recognizedSliderElement) {
                if (this.state.currentRecognizedSliderItem === 1) {
                    recognizedSliderElement.style.left = "0"
                } else {
                    recognizedSliderElement.style.left = "-" + leftPosition + "px"
                }
            }
        })
    }


    componentDidMount() {
        window.addEventListener('load', this.loadRecognizedSlide())
        this.autoSlide = setInterval(
            () => this.nextRecognizedSlider(),
            3000
        );
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.loadRecognizedSlide())
        clearInterval(this.autoSlide)
    }

    render() {
        let { recognizedItemWidth, recognizedSliderContainWidth } = this.state
        return (
            <div className="box body-recognized">
                <div className="container sub-slider" id="recognized-slider">
                    {
                        this.state.recognizedConfig.map((item) => {
                            return (
                                <div key={item.key} className="items">
                                    <div className="text" id="recognized-text">
                                        <h3>{item.text}</h3>
                                    </div>
                                    <div className="slides-outer" id="slides-outer">
                                        <div className="slides" id="recognized-slider-items" style={{ width: `${recognizedSliderContainWidth}px` }}>
                                            {
                                                item.images.map((item) => {
                                                    return (
                                                        <div className="item" key={item.key} style={{ Width: `${recognizedItemWidth}px` }}>
                                                            <li>
                                                                <a href={item.url} >
                                                                    <img src={item.image}
                                                                        alt="..." />
                                                                </a>
                                                            </li>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default BodyRecognized;
