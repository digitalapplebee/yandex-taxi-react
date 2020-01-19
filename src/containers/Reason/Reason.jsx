import React from 'react'
import { MdWallpaper } from 'react-icons/md'
import { IoIosPeople, IoIosAirplane, IoMdDocument } from 'react-icons/io'
import TitleContainer from 'components/TitleContainer'

import './reason.css'

function Reason() {
  return (
    <div className="reason-container">
      <TitleContainer align="center">Почему Яндекс.Такси?</TitleContainer>
      <div className="reason-grid">
        <div className="reason-block">
          <div className="reason-style-center">
            <MdWallpaper className="reason-icon" />
          </div>
          <h3 className="reason-text-grid-label">Навигация</h3>
          <p className="reason-text-description">
            В программе имеется встроенный &quotЯндекс.Навигатор&quot, который
            помогает водителям быстрее добраться до цели.
          </p>
        </div>
        <div className="reason-block">
          <div className="reason-style-center">
            <IoIosPeople className="reason-icon" />
          </div>
          <h3 className="reason-text-grid-label">Посадка</h3>
          <p className="reason-text-description">
            У Вас не возникнет проблем с поиском и посадкой пассажиров, так как
            встроенный навигатор приведёт вас к месту посадки пассажира.
          </p>
        </div>
        <div className="reason-block">
          <div className="reason-style-center">
            <IoIosAirplane className="reason-icon" />
          </div>
          <h3 className="reason-text-grid-label">Трансферы</h3>
          <p className="reason-text-description">
            Регулярные трансферы в Национальный аэропорт «Минск», а так же из
            Национальный аэропорт «Минск» в город.
          </p>
        </div>
        <div className="reason-block">
          <div className="reason-style-center">
            <IoMdDocument className="reason-icon" />
          </div>
          <h3 className="reason-text-grid-label">Документы</h3>
          <p className="reason-text-description">
            От Вас потребуются фото документов на авто и Водительское
            удостоверением, а так же наличие таксометра в автомобиле.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reason
