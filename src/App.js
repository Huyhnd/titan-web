import './App.css';
import React from 'react';
import images from './data/enum/image';

import Header from './component/header/header';
import TopSlider from './component/body/topSlider';
import BodyServices from './component/body/bodyServices';
import BodyDomain from './component/body/bodyDomain';
import BodyInnovation from './component/body/bodyInnovations';
import BodyModel from './component/body/bodyModels';
import BodyClient from './component/body/bodyClient';
import Footer from './component/footer/footer';
import BodyTestimonial from './component/body/bodyTestimonial';
import BodyJob from './component/body/bodyJob';
import BodyNews from './component/body/bodyNews';
import BodyBlog from './component/body/bodyBlog';
import BodyRequest from './component/body/bodyRequest';
import BodyRecognized from './component/body/bodyRecognized';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: images,
    }
  }

  render() {
    return (
      <div className="App">
        <Header images={this.state.images} />
        <TopSlider images={this.state.images} />
        <BodyServices />
        <BodyDomain images={this.state.images} />
        <BodyInnovation />
        <BodyModel />
        <BodyClient images={this.state.images} />
        <BodyTestimonial />
        <BodyRecognized />
        <BodyJob />
        <BodyNews />
        <BodyBlog />
        <BodyRequest />
        <Footer />
      </div>
    );
  }
}

export default App;
