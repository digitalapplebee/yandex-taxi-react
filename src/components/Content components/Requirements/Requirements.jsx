import React from 'react'

import './requirements.css'

export default class Requirements extends React.Component {
  render(){
    return(
      <div className="requirements-container">
        <p>Условия паботы и требования</p>
        <ul>
          <li>Возраст от 21 года</li>
          <li>Стаж В/У от 3 лет</li>
          <li>Страховка пассажиров</li>
          <li>Автомобиль от 2003 года</li>
          <li>Смартфон на Android</li>
        </ul>
        <button>Стать водителем</button>
        {/* img */}
      </div>
    )
  }
}