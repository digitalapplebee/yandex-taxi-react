import React from 'react'

import car from '../img/car.png'

import './content.css'

export default class Content extends React.Component {

  // add listener to submit button
  
  render() {
    return (
      <div className="content-container">
        <p className="content-text">Приглашаем водителей на автомобили организации для работы в Яндекс.Такси</p>
        <div className="content-submit-form">
          <input type="text" placeholder="Ваше имя или фамилия"/>
          <input type="text" placeholder="Номер телефона"/>
        </div>
        <div className="content-button-center">
          <button className="content-button-submit">Отправить заявку</button>
        </div>
        <p className="content-text-calling">или звоните</p>
        <p className="content-text-number">+375 (44) 588-50-00</p>
        <img className="content-img-car" src={car} alt="Yandex Car"/>
      </div>
    )
  }
}