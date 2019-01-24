import React, { PureComponent } from 'react'
import './title-container.css'

export default class TitleContainer extends PureComponent {
  render() {
    return(
      <p className="title-container">{this.props.title}</p>
    )
  }
}