import './App.css';
import React from 'react';
import images from './data/enum/image';

import Header from './component/header/Header';
import TopSlider from './component/body/TopSlider';
import BodyServices from './component/body/BodyServices';
import BodyDomain from './component/body/BodyDomain';
import BodyInnovation from './component/body/BodyInnovations';
import BodyModel from './component/body/BodyModels';
import BodyClient from './component/body/BodyClient';
import BodyTestimonial from './component/body/BodyTestimonial';
import BodyJob from './component/body/BodyJob';
import BodyNews from './component/body/BodyNews';
import BodyBlog from './component/body/BodyBlog';
import BodyRequest from './component/body/BodyRequest';
import BodyRecognized from './component/body/BodyRecognized';
import Footer from './component/footer/Footer';

import LoginModel from './pages/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: images,
      renderPage: ''
    }

    this.renderLogin = this.renderLogin.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  renderLogin() {
    this.setState({ renderPage: 'login' })
  }

  handleCloseModal() {
    this.setState({ renderPage: '' })
  }

  render() {
    let { renderPage } = this.state
    return (
      <div className="App">
        <Header images={this.state.images} renderLogin={this.renderLogin} />
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
        <LoginModel renderLogin={renderPage === 'login'} handleCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}

export default App;
