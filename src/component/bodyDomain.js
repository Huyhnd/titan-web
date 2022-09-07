import React from "react";
import data from '../data/enum/enum'

class BodyDomain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            domainContentConfig: data.domainContentConfig,
            domainTitleConfig: data.domainTitleConfig,
            domainSliderContainWidth: 0,
            domainSliderItemWidth: 0,
            domainSliderItemCount: 9,
            currentDomainSliderItem: 1
        }

        this.loadDomainSlider = this.loadDomainSlider.bind(this)
        this.nextDomainSlider = this.nextDomainSlider.bind(this)
        this.backDomainSlider = this.backDomainSlider.bind(this)
    }

    loadDomainSlider() {
        let newDomainSliderItemWidth = document.getElementById("domain-slider").clientWidth / 3
        this.setState({ domainSliderItemWidth: newDomainSliderItemWidth, domainSliderContainWidth: newDomainSliderItemWidth * this.state.domainSliderItemCount })
    }

    nextDomainSlider() {
        let currentDomainSliderItem = this.state.currentDomainSliderItem
        if (currentDomainSliderItem === this.state.domainSliderItemCount - 3) {
            currentDomainSliderItem = 1
        } else {
            currentDomainSliderItem++
        }

        this.setState({ currentDomainSliderItem: currentDomainSliderItem }, () => {
            let leftPosition = (this.state.currentDomainSliderItem - 1) * this.state.domainSliderItemWidth
            let subSlider1Element = document.getElementById("domain-slider-items")
            if (subSlider1Element) {
                if (this.state.currentDomainSliderItem === 1) {
                    subSlider1Element.style.left = "0"
                } else {
                    subSlider1Element.style.left = "-" + leftPosition + "px"
                }
            }
        })
    }

    backDomainSlider() {
        let currentDomainSliderItem = this.state.currentDomainSliderItem
        if (currentDomainSliderItem === 1) {
            currentDomainSliderItem = this.state.domainSliderItemCount - 3
        } else {
            currentDomainSliderItem--
        }

        this.setState({ currentDomainSliderItem: currentDomainSliderItem }, () => {
            let leftPosition = (this.state.currentDomainSliderItem - 1) * this.state.domainSliderItemWidth
            let subSlider1Element = document.getElementById("domain-slider-items")
            if (subSlider1Element) {
                if (this.state.currentDomainSliderItem === 1) {
                    subSlider1Element.style.left = "0"
                } else {
                    subSlider1Element.style.left = "-" + leftPosition + "px"
                }
            }
        })
    }

    componentDidMount() {
        window.addEventListener('load', this.loadDomainSlider())
        this.autoSlide = setInterval(
            () => this.nextDomainSlider(),
            2000
        );
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.loadDomainSlider())
        clearInterval(this.autoSlide)
    }

    render() {
        let { domainSliderContainWidth, domainSliderItemWidth } = this.state
        return (
            <div className="box box-bg">
                <div className="container sub-slider " id="domain-slider">
                    {
                        this.state.domainTitleConfig.map((item) => {
                            return (
                                <div key={item.key} className="domain-title">
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
                        <div className="slides" id="domain-slider-items" style={{ width: `${domainSliderContainWidth}px` }}>
                            {
                                this.state.domainContentConfig.map((item) => {
                                    return (
                                        <div key={item.key} className="slide-item" style={{ width: `${domainSliderItemWidth}px` }}>
                                            <div className="item-title">
                                                <div className="image">
                                                    <img src={item.image} alt="..." />
                                                </div>
                                                <h3>{item.contentTitle}</h3>
                                            </div>
                                            <p>{item.contentDescribe}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <button className="btn-previus" onClick={() => this.backDomainSlider()}>
                        <img src={this.props.images.prevImg} alt="previmg" />
                    </button>
                    <button className="btn-next" onClick={() => this.nextDomainSlider()}>
                        <img src={this.props.images.nextImg} alt="nextimg" />
                    </button>
                </div>
            </div>
        )
    }
}

export default BodyDomain;