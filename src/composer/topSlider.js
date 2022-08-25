import React from "react";
import nextimg from "../data/image/icons/next.svg";
import previmg from "../data/image/icons/back.svg";
import data from "../data/json/topsliderdata.json"

class TopSlider extends React.Component {

    render() {
        return (
            <div className="slider">
                <div className="slides" id="top-slider">
                    <div className="slide-item item1">
                        <div className="slide-content">
                            <h1 className="title">
                                {data.item1.title} <span>{data.item1["title-span"]}</span>
                            </h1>
                            <p>{data.item1.desc}</p>
                        </div>
                    </div>
                    <div className="slide-item item2">
                        <div className="slide-content">
                            <h1 className="title">
                                {data.item2.title} <span>{data.item2["title-span"]}</span>
                            </h1>
                            <p>{data.item2.desc}</p>
                        </div>
                    </div>
                    <div className="slide-item item3">
                        <div className="slide-content">
                            <h1 className="title">
                                {data.item3.title} <span>{data.item3["title-span"]}</span>
                            </h1>
                            <p>{data.item3.desc}</p>
                        </div>
                    </div>
                    <div className="slide-item item4">
                        <div className="slide-content">
                            <h1 className="title">
                                {data.item4.title} <span>{data.item4["title-span"]}</span>
                            </h1>
                            <p>{data.item4.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="slider-actions">
                    <button className="btn-previus" onclick="backTopSlider()">
                        <img src={previmg} />
                    </button>
                    <span id="slider-paging">1/4</span>
                    <button className="btn-next" onclick="nextTopSlider()">
                        <img src={nextimg} />
                    </button>
                </div>
            </div>
        );
    }
}

export default TopSlider;