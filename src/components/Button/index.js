import React, { Component } from 'react'
import { goToTop } from 'react-scrollable-anchor'
import './button.css'

export default class Button extends Component {
  render() {
    return (
      <button 
        className={this.props.submit ? 'submit-button' : 'requirements-button'}
        onClick={this.props.scroll ? goToTop : ''}
        // className={this.props.center ? 'center' : ''}
      >
        {this.props.title}
      </button>
    )
  }
}


// const Button = ({children, fill, className, color, disabled, ...props}) => (
//   <button
//     disabled={disabled}
//     className={`${className} ${st.button}` +
//     `
//       ${fill && st[`fill-${color || 'yellow'}`]}
//       ${st[`${color || 'yellow'}`]}
//       ${disabled && st.disabled}
//     `}
//     {...props}
//   >
//     <span>{children}</span>
//   </button>
// );
