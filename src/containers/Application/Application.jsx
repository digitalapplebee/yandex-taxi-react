import React, { Component } from 'react'
import TitleContainer from '../../components/TitleContainer'
import ScrollableAnchor from 'react-scrollable-anchor'
import Container from '../../components/Container'
import { FaMoneyBillAlt, FaListAlt, FaRedoAlt, FaHandshake } from 'react-icons/fa'
import ApplicationImg from '../../img/phone.png'
import './application.css'

export default class Application extends Component {
  render() {
    return (
      <Container>
        <div className="application-container">
          <ScrollableAnchor id={'application'}>
            <TitleContainer align="center">Приложение</TitleContainer>
          </ScrollableAnchor>
          <div className="application-grid">
            <div className="application-grid-block">
              <div>
                <div className="application-icon-container">
                  <FaMoneyBillAlt className="application-icon" />
                </div>
                <h3 className="application-grid-block-label text-center">Кошелек</h3>
                <p className="application-grid-block-description">Вы самостоятельно контролируете и управляете своим заработком, все доходы отображаются в вашем личном кабинете.</p>
              </div>
              <div>
                <div className="application-icon-container">
                  <FaListAlt className="application-icon" />
                </div>
                <h3 className="application-grid-block-label text-center">Удобство</h3>
                <p className="application-grid-block-description">Интерактивное и простое приложения, работайте по собственному графику.</p>
              </div>
            </div>
            <img src={ApplicationImg} alt="Application" />
            <div className="application-grid-block">
              <div>
                <div className="application-icon-container">
                  <FaRedoAlt className="application-icon" />
                </div>
                <h3 className="application-grid-block-label text-center">Большой поток заказов</h3>
                <p className="application-grid-block-description">Работа с Яндекс.Такси позволяет везде принимать выгодные заказы, что исключает простой на линии.</p>
              </div>
              <div>
                <div className="application-icon-container">
                  <FaHandshake className="application-icon" />
                </div>
                <h3 className="application-grid-block-label text-center">Бонусы</h3>
                <p className="application-grid-block-description">У нас самые выгодные условия, нет задержек выплат, скидки и бонусы.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}