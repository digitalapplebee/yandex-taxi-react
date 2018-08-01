import React from 'react'

import './header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <p className="header-logo">
          <span className="header-logo-yandex">
            <span className="header-logo-y">Y</span>andex 
          </span>
          <span>&nbsp; Taxi</span>
        </p>
        <nav className="inline">
          <ul>
            <li><a href="#">ПОЧЕМУ ЯНДЕСК.ТАКСИ?</a></li>
            <li><a href="#">ТАРИФЫ</a></li>
            <li><a href="#">ПРИЛОЖЕНИЕ</a></li>
            <li><a href="#">ПОДКЛЮЧИТЬСЯ</a></li>
            <li><a href="#">VK</a></li>
            <li><a href="#">F</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}