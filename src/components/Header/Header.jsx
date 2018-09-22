import React from 'react'

// css
import './header.css'

// icons
import { FaVk, FaFacebookF, FaTwitter } from 'react-icons/fa'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolling: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }

  render() {
    return (
      // <div className="header-container">
      <div className={`${this.state.scrolling ? 'header-container-scrolled' : 'header-container'}`}>
        <p className="header-logo">
          <span className="header-logo-yandex">
            <span className="header-logo-y">Y</span>andex
          </span>
          <span className="header-logo-taxi">&nbsp;Taxi</span>
        </p>
        <nav className="header-nav">
          <ul>
            <li><a href="#">ПОЧЕМУ ЯНДЕСК.ТАКСИ?</a></li>
            <li><a href="#">ТАРИФЫ</a></li>
            <li><a href="#application">ПРИЛОЖЕНИЕ</a></li>
            <li><a href="#">ПОДКЛЮЧИТЬСЯ</a></li>
            <li><a href="#"><FaVk /></a></li>
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
          </ul>
        </nav>
      </div>
    )
  }
}