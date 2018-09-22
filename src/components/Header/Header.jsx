import React from 'react'

// css
import './header.css'

// icons
import { FaVk, FaFacebookF, FaTwitter } from 'react-icons/fa'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <p className="header-logo">
          <span className="header-logo-yandex">
            <span className="header-logo-y">Y</span>andex
          </span>
          <span>&nbsp;Taxi</span>
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