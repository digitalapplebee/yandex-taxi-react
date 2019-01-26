import React, { PureComponent } from 'react'
import './logo.css'

export default class Logo extends PureComponent {
  render() {
    return (
      <p className="logo">
        <span className="logo-yandex">
          <span className="logo-y">Y</span>andex
        </span>
        <span className="logo-taxi">&nbsp;Taxi</span>
      </p>
    )
  }
}