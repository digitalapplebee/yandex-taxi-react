import React, { Fragment, PureComponent } from 'react'
import Favicon from 'react-favicon';
import Header from './components/Header/Header'
import Content from './containers/Content/Content'
import Reason from './containers/Reason/Reason'
import Rates from './containers/Rates/Rates'
import Application from './containers/Application/Application'
import Requriments from './containers/Requirements/Requirements'
import Footer from './components/Footer'

import Container from './components/Container'

import 'normalize.css'
import './app.css'

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Favicon url="https://raw.githubusercontent.com/digitalapplebee/yandex-taxi-react/master/src/img/favicon.ico" />
        {/* <Container> */}
          <Header />
          <Content />
          <Reason />
          <Rates />
          <Application />
          <Requriments />
        {/* </Container> */}
        <Footer />
      </Fragment>
    )
  }
}