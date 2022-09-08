import React from "react";
import data from '../data/enum/enum'

class BodyClient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clientTitleConfig: data.clientTitleConfig,
            clientContentConfig: data.clientContentConfig,
            clientSliderContainWidth: 0,
            clientSliderItemWidth: 0,
            clientSliderItemCount: 25,
            currentclientSliderItem: 1
        }
        this.loadClientSlider = this.loadClientSlider.bind(this)
        this.backClientSlider = this.backClientSlider.bind(this)
        this.nextClientSlider = this.nextClientSlider.bind(this)
    }

    loadClientSlider() {
        let clientSliderItemWidth = document.getElementById("client-slider").clientWidth / 4
        this.setState({ clientSliderItemWidth: clientSliderItemWidth, clientSliderContainWidth: clientSliderItemWidth * this.state.clientSliderItemCount })
    }

    backClientSlider() {
        let currentclientSliderItem = this.state.currentclientSliderItem
        if (currentclientSliderItem === 1) {
            currentclientSliderItem = this.state.clientSliderItemCount - 4
        } else {
            currentclientSliderItem--
        }

        this.setState({ currentclientSliderItem: currentclientSliderItem }, () => {
            let leftPosition = (this.state.currentclientSliderItem - 1) * this.state.clientSliderItemWidth
            let clientSliderElement = document.getElementById("client-slider-items")
            if (clientSliderElement) {
                if (this.state.currentclientSliderItem === 1) {
                    clientSliderElement.style.left = "0"
                } else {
                    clientSliderElement.style.left = "-" + leftPosition + "px"
                }
            }
        })
    }

    nextClientSlider() {
        let currentclientSliderItem = this.state.currentclientSliderItem
        if (currentclientSliderItem === this.state.clientSliderItemCount - 4) {
            currentclientSliderItem = 1
        } else {
            currentclientSliderItem++
        }

        this.setState({ currentclientSliderItem: currentclientSliderItem }, () => {
            let leftPosition = (this.state.currentclientSliderItem - 1) * this.state.clientSliderItemWidth
            let clientSliderElement = document.getElementById("client-slider-items")
            if (clientSliderElement) {
                if (this.state.currentclientSliderItem === 1) {
                    clientSliderElement.style.left = "0"
                } else {
                    clientSliderElement.style.left = "-" + leftPosition + "px"
                }
            }
        })
    }

    componentDidMount() {
        window.addEventListener('load', this.loadClientSlider())
        this.autoSlide = setInterval(
            () => this.nextClientSlider(),
            2000
        );
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.loadClientSlider())
        clearInterval(this.autoSlide)
    }

    render() {
        let { clientSliderContainWidth, clientSliderItemWidth } = this.state
        return (
            <div className="box client-box">
                <div className="container sub-slider" id="client-slider">
                    {
                        this.state.clientTitleConfig.map((item) => {
                            return (
                                <div key={item.key} >
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
                        <div className="slides" id="client-slider-items" style={{ width: `${clientSliderContainWidth}px` }}>
                            {
                                this.state.clientContentConfig.map((item) => {
                                    return (
                                        <div key={item.key} className="slide-item" style={{ width: `${clientSliderItemWidth}px` }}>
                                            <div class="logo-item">
                                                <a href={item.url}>
                                                    <img src={item.image} alt={item.alt} />
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <button className="btn-previus" onClick={() => this.backClientSlider()}>
                    <img src={this.props.images.prevImg} alt="previmg" />
                </button>
                <button className="btn-next" onClick={() => this.nextClientSlider()}>
                    <img src={this.props.images.nextImg} alt="nextimg" />
                </button>
            </div>
        )
    }
}

export default BodyClient;