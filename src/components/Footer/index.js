import React, { PureComponent } from 'react'
import './footer.css'

export default class Footer extends PureComponent {
  render(){
    return (
      <div className="footer-container">
      <p className="footer-text">© 2018 ООО «Inv» | УНП 185734586</p>
      <p className="footer-text">Свидетельство о государственной регистрации 185734586 от 21.01.2018г.</p>
    </div>
    )
  }
}