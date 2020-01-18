import React from 'react'
import { FaCheck } from 'react-icons/fa'
import Button from '../../components/Button'
import TitleContainer from '../../components/TitleContainer'
import carTopImg from '../../img/car-top.png'
import data from './data'

import './requirements.css'

function Requirements() {
  return (
    <div className="requirements-container">
      <div>
        <TitleContainer align="left" className="requirements-title">
          Условия работы и требования
        </TitleContainer>
        <div className="requirements-list-block">
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <FaCheck className="requirements-list-check-icon" />
                {item.title}
              </li>
            ))}
          </ul>
          <Button requirement>СТАТЬ ВОДИТЕЛЕМ</Button>
        </div>
      </div>
      <img src={carTopImg} alt="Машина" />
    </div>
  )
}

export default Requirements
