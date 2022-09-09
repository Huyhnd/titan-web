import React from "react";
import data from '../../data/enum/enum'

class BodyBlog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogTitleConfig: data.blogTitleConfig,
            blogContentConfig: data.blogContentConfig,
            newblogWidth: 0
        }
    }

    loadNewBlog() {
        let newblogWidth = document.getElementById("container").clientWidth / 3
        this.setState({ newblogWidth: newblogWidth })

    }

    componentDidMount() {
        window.addEventListener('load', this.loadNewBlog())
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.loadNewBlog())
    }

    render() {
        let { newblogWidth } = this.state
        return (
            <div className="box body-blog">
                <div className="container" id="container">
                    {
                        this.state.blogTitleConfig.map((item) => {
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
                            this.state.blogContentConfig.map((item) => {
                                return (
                                    <div key={item.key} className="item" style={{ width: `${newblogWidth}px` }}>
                                        <div className="title-img">
                                            <div className="image">
                                                <img src={item.image} alt="..." />
                                            </div>
                                            <div className="content-title">
                                                <h3>{item.contentTitle}</h3>
                                            </div>
                                        </div>
                                        <div className="content-description">
                                            <div className="user-post">
                                                <p>{item.user} - {item.date}</p>
                                            </div>
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

export default BodyBlog;
