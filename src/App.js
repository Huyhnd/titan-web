import './App.css';
import Header from './component/header';
import TopSlider from './component/topSlider';
import Footer from './component/footer';
import BodyServices from './component/bodyServices';
import images from './data/enum/image'
import React from 'react';
import BodyDomain from './component/bodyDomain';
import BodyInnovation from './component/bodyInnovations';
import BodyModel from './component/bodyModels';
import BodyClient from './component/bodyClient';

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
        <Footer />
      </div>
    );
  }
}

export default App;
