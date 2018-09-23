import React from 'react'

import './requirements.css'

import Car2 from '../../../img/car-2.png'
import { FaCheck } from 'react-icons/fa'

import ScrollableAnchor, { goToAnchor, configureAnchors, goToTop } from 'react-scrollable-anchor'

export default class Requirements extends React.Component {

  componentWillMount() {
    configureAnchors({ offset: -80, scrollDuration: 800 })
  }

  render() {
    return (
      <div className="requirements-container">
        <div>
          <ScrollableAnchor id={'requirements'}>
            <p className="requirements-label">Условия работы и требования</p>
          </ScrollableAnchor>
          <div className="requirements-list-block">
            <ul>
              <li><FaCheck className="requirements-list-check-icon" />Возраст от 21 года</li>
              <li><FaCheck className="requirements-list-check-icon" />Стаж В/У от 3 лет</li>
              <li><FaCheck className="requirements-list-check-icon" />Страховка пассажиров</li>
              <li><FaCheck className="requirements-list-check-icon" />Автомобиль от 2003 года</li>
              <li><FaCheck className="requirements-list-check-icon" />Смартфон на Android</li>
            </ul>
            <button className="requirements-button" onClick={goToTop}>СТАТЬ ВОДИТЕЛЕМ</button>
          </div>
        </div>

        <img src={Car2} alt="car2" />
      </div>
    )
  }
}