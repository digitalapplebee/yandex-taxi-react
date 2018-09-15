import React from 'react'
import Favicon from 'react-favicon';

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Reason from './components/Content components/Reason/Reason'
import Rates from './components/Content components/Rates/Rates'
import Application from './components/Content components/Application/Application'
import Requriments from './components/Content components/Requirements/Requirements'
import Footer from './components/Content components/Footer/Footer'

import Background from './img/minsk.jpg'

//import Favicon from './img/favicon.ico'

import 'normalize.css'
import './app.css'

const backgroundImageStyle = {
  backgroundImage: `url(${Background})`,
  width: '100%',
  height: '80%',
  backgroundRepeat: 'no-repeat',
  filter: 'brightness(50%)',
  // backgroundSize: 'cover',
  // filter: 'blur(1px)',
};

export default class App extends React.Component {
  render() {
    return (
      // style={backgroundImageStyle}
      <div className="app-container">
        <Favicon url="https://raw.githubusercontent.com/digitalapplebee/yandex-taxi-react/master/src/img/favicon.ico" />
        <Header style="margin: '0'" />
        <Content />
        <Reason />
        <Rates />
        <Application />
        <Requriments />
        <Footer />
      </div>
    )
  }
}