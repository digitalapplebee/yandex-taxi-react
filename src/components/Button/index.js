import React, { Component } from 'react'
import { goToTop } from 'react-scrollable-anchor'
import './button.css'

export default class Button extends Component {
  render() {
    return (
      <button 
        className="button"
        onClick={this.props.scroll ? goToTop : ''}
      >
        {this.props.title}
      </button>
    )
  }
}