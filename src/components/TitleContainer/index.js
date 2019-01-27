import React, { PureComponent } from 'react'
import './title-container.css'

export default class TitleContainer extends PureComponent {
  render() {
    return(
      <h2 className="title-container">{this.props.title}</h2>
    )
  }
}