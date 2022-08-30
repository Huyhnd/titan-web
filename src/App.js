import './App.css';
import Header from './component/header';
import TopSlider from './component/topSlider';
import Footer from './component/footer';
import BodyServices from './component/bodyServices';
import image from './data/enum/image'
import data from './data/enum/enum'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Header logo={image.logo} headerConfig={data.headerConfig} />
        <TopSlider />
        <BodyServices />
        <Footer />
      </div>
    );
  }
}

export default App;
