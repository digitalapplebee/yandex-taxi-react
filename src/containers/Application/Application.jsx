import React from 'react'
import {
  FaMoneyBillAlt,
  FaListAlt,
  FaRedoAlt,
  FaHandshake,
} from 'react-icons/fa'
import TitleContainer from '../../components/TitleContainer'
import Container from '../../components/Container'
import './application.css'
import ApplicationImg from '../../img/phone.png'

function Application() {
  return (
    <Container>
      <div className="application-container">
        <TitleContainer align="center">Приложение</TitleContainer>
        <div className="application-grid">
          <div className="application-grid-block">
            <div>
              <div className="block-center">
                <FaMoneyBillAlt className="application-icon" />
              </div>
              <h3 className="application-grid-block-label text-center">
                Кошелек
              </h3>
              <p className="application-grid-block-description">
                Вы самостоятельно контролируете и управляете своим заработком,
                все доходы отображаются в вашем личном кабинете.
              </p>
            </div>
            <div>
              <div className="block-center">
                <FaListAlt className="application-icon" />
              </div>
              <h3 className="application-grid-block-label text-center">
                Удобство
              </h3>
              <p className="application-grid-block-description">
                Интерактивное и простое приложения, работайте по собственному
                графику.
              </p>
            </div>
          </div>
          <img src={ApplicationImg} alt="Application" />
          <div className="application-grid-block">
            <div>
              <div className="block-center">
                <FaRedoAlt className="application-icon" />
              </div>
              <h3 className="application-grid-block-label text-center">
                Большой поток заказов
              </h3>
              <p className="application-grid-block-description">
                Работа с Яндекс.Такси позволяет везде принимать выгодные заказы,
                что исключает простой на линии.
              </p>
            </div>
            <div>
              <div className="block-center">
                <FaHandshake className="application-icon" />
              </div>
              <h3 className="application-grid-block-label text-center">
                Бонусы
              </h3>
              <p className="application-grid-block-description">
                У нас самые выгодные условия, нет задержек выплат, скидки и
                бонусы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Application
