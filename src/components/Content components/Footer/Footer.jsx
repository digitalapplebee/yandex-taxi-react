import React from 'react'

import './footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <p className="footer-center-text">© 2018 ООО «Inv» | УНП 185734586</p>
        <p className="footer-center-text">Свидетельство о государственной регистрации 185734586 от 21.01.2018г.</p>
      </div>
    )
  }
}