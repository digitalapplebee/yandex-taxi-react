import React from 'react'

import './application.css'

import ApplicationImg from '../../../img/phone.png'

import { FaMoneyBillAlt } from 'react-icons/fa'
import { FaListAlt } from 'react-icons/fa'
import { FaRedoAlt } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa'

export default class Application extends React.Component {
  render() {
    return (
      <div className="application-container">
        <p className="application-label">Приложение</p>
        <div className="application-grid">
          <div className="application-grid-block">
            <div>
              <div className="application-icon-container">
                <FaMoneyBillAlt className="application-icon" />
              </div>
              <p className="application-grid-block-label">Кошелек</p>
              <p className="application-grid-block-description">Вы самостоятельно контролируете и управляете своим заработком, все доходы отображаются в вашем личном кабинете.</p>
            </div>
            <div>
              <div className="application-icon-container">
                <FaListAlt className="application-icon" />
              </div>
              <p className="application-grid-block-label">Удобство</p>
              <p className="application-grid-block-description">Интерактивное и простое приложения, работайте по собственному графику.</p>
            </div>
          </div>
          <img src={ApplicationImg} alt="Application" />
          <div className="application-grid-block">
            <div>
              <div className="application-icon-container">
                <FaRedoAlt className="application-icon" />
              </div>
              <p className="application-grid-block-label">Большой поток заказов</p>
              <p className="application-grid-block-description">Работа с Яндекс.Такси позволяет везде принимать выгодные заказы, что исключает простой на линии.</p>
            </div>
            <div>
              <div className="application-icon-container">
                <FaHandshake className="application-icon" />
              </div>
              <p className="application-grid-block-label">Бонусы</p>
              <p className="application-grid-block-description">У нас самые выгодные условия, нет задержек выплат, скидки и бонусы.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}