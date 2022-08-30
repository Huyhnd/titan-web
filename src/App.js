import './App.css';
import Header from './component/header';
import TopSlider from './component/topSlider';
import Footer from './component/footer';
import BodyServices from './component/bodyServices';
import images from './data/enum/image'
import data from './data/enum/enum'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Header images={images} headerConfig={data.headerConfig} />
        <TopSlider images={images} topSliderConfig={data.topSliderConfig} />
        <BodyServices images={images} bodyTitleConfig={data.bodyTitleConfig} bodyContentConfig={data.bodyContentConfig} />
        <Footer />
      </div>
    );
  }
}

export default App;
