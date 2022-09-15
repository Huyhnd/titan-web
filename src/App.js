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

import LoginModel from './pages/Login'
import ProfileModel from './pages/Profile'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: images,
      renderPage: '',
      renderProfileOn: ''
    }

    this.renderProfile = this.renderProfile.bind(this)
    this.handleLogoutModel = this.handleLogoutModel.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.handleCloseModel = this.handleCloseModel.bind(this)
  }

  renderProfile() {
    this.setState({ renderProfileOn: 'on' })
  }

  handleLogoutModel() {
    this.setState({ renderProfileOn: '' })
  }

  renderLogin() {
    this.setState({ renderPage: 'login' })
  }

  handleCloseModel() {
    this.setState({ renderPage: '' })
  }

  render() {
    let { renderPage, renderProfileOn } = this.state
    return (
      <div className="App">
        <Header images={this.state.images} renderLogin={this.renderLogin} renderProfile={this.renderProfile} />
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
        <LoginModel renderLogin={renderPage === 'login'} handleCloseModel={this.handleCloseModel} />
        <ProfileModel renderProfile={renderProfileOn === 'on'} handleLogoutModel={this.handleLogoutModel} />
      </div>
    );
  }
}

export default App;
