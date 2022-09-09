import React from "react";
import data from '../../data/enum/enum'

class BodyNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsTitleConfig: data.newsTitleConfig,
            newsContentConfig: data.newsContentConfig,
            newsItemWidth: 0
        }
        this.loadNews = this.loadNews.bind(this)
    }

    loadNews() {
        let newsItemWidth = document.getElementById("container").clientWidth / 3
        this.setState({ newsItemWidth: newsItemWidth })

    }

    componentDidMount() {
        window.addEventListener('load', this.loadNews())
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.loadNews())
    }

    render() {
        let { newsItemWidth } = this.state
        return (
            <div className="box body-news">
                <div className="container" id="container">
                    {
                        this.state.newsTitleConfig.map((item) => {
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
                            this.state.newsContentConfig.map((item) => {
                                return (
                                    <div key={item.key} className="item" style={{ width: `${newsItemWidth}px` }}>
                                        <div className="title-img">
                                            <div className="image">
                                                <img src={item.image} alt="..." />
                                            </div>
                                            <div className="content-title">
                                                <h3>{item.contentTitle}</h3>
                                            </div>
                                        </div>
                                        <div className="content-description">
                                            <p>{item.contentDescribe}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyNews;
