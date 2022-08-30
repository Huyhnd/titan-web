import React from "react";
import imgService1 from '../data/image/images/service1.png'
import imgService2 from '../data/image/images/service2.png'
import imgService3 from '../data/image/images/service3.png'


class BodyServices extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div className="box box-1">
                <div className="container">
                    <div className="title-venture">
                        <h1 className="title">
                            <a href="/#">We provide</a>
                        </h1>
                    </div>
                    <div className="describe grey-color">
                        Professional and trusted services with cost-effective and exceptional expertise to deal with
                        any complexities in scalable projects
                    </div>
                    <div className="items">
                        <div className="item">
                            <div className="image">
                                <img src={imgService1} alt="Software development" />
                            </div>
                            <h3>SOFTWARE DEVELOPMENT</h3>
                            <p>Develop software applications from business ideas to deployment, develop based on product definition, the initial designs, or develop modules with multiple teams for concurrent development thus reducing time to market.</p>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src={imgService2} alt="Software development" />
                            </div>
                            <h3>SOFTWARE DEVELOPMENT</h3>
                            <p>Develop software applications from business ideas to deployment, develop based on product definition, the initial designs, or develop modules with multiple teams for concurrent development thus reducing time to market.</p>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src={imgService3} alt="Software development" />
                            </div>
                            <h3>SOFTWARE DEVELOPMENT</h3>
                            <p>Develop software applications from business ideas to deployment, develop based on product definition, the initial designs, or develop modules with multiple teams for concurrent development thus reducing time to market.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyServices;
