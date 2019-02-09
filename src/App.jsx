import React, { Fragment, PureComponent } from 'react'
import Favicon from 'react-favicon'
import Header from './components/Header/Header'
import Content from './containers/Content/Content'
import Container from './components/Container'
import Reason from './containers/Reason/Reason'
import Rates from './containers/Rates/Rates'
import Application from './containers/Application/Application'
import Requriments from './containers/Requirements/Requirements'
import Footer from './components/Footer/Footer'

import 'normalize.css'
import './app.css'

export default class App extends PureComponent {
  render() {
    const faviconURL = "https://raw.githubusercontent.com/digitalapplebee/yandex-taxi-react/master/src/img/favicon.ico"

    return (
      <Fragment>
        <Favicon url={faviconURL} />
        <Header />
        <Content />
        <Container>
          <Reason />
          <Rates />
          <Application />
          <Requriments />
        </Container>
        <Footer />
      </Fragment>
    )
  }
}