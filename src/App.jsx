import React from 'react'
import Favicon from 'react-favicon';

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Reason from './components/Content components/Reason/Reason'
import Rates from './components/Content components/Rates/Rates'
import Application from './components/Content components/Application/Application'
import Requriments from './components/Content components/Requirements/Requirements'
import Footer from './components/Content components/Footer/Footer'

import 'normalize.css'
import './app.css'

export default class App extends React.Component {
  render() {
    return (
      // className="app-container"
      <div style={{zIndex: "5"}} >
        <Favicon url="https://raw.githubusercontent.com/digitalapplebee/yandex-taxi-react/master/src/img/favicon.ico" />
        <Header />
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