import React, { PureComponent } from 'react'
import './input.css'

export default class Input extends PureComponent {
  render() {
    return (
      <input 
        type="text"
        placeholder={this.props.placeholder} 
        className="text-input"
      />
    )
  }
}