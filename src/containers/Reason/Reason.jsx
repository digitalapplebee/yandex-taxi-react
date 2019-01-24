import React from 'react'
import TitleContainer from '../../components/TitleContainer'
import { MdWallpaper } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'
import { IoIosAirplane } from 'react-icons/io'
import { IoMdDocument } from 'react-icons/io'

import '../Reason/reason.css'

import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

export default class Reason extends React.Component {

  componentWillMount() {
    configureAnchors({ offset: -80, scrollDuration: 800 })
  }

  render() {
    return (
      <div className="reason-container">
        <ScrollableAnchor id={'reason'}>
          <TitleContainer title="Почему Яндекс.Такси?" />
        </ScrollableAnchor>
        <div className="reason-grid">
          <div className="reason-block">
            <div className="reason-style-center">
              <MdWallpaper className="reason-icon" />
            </div>
            <p className="reason-text-grid-label">Навигация</p>
            <p className="reason-text-description">В программе имеется встроенный "Яндекс.Навигатор", который помогает водителям быстрее добраться до цели.</p>
          </div>
          <div className="reason-block">
            <div className="reason-style-center">
              <IoIosPeople className="reason-icon" />
            </div>
            <p className="reason-text-grid-label">Посадка</p>
            <p className="reason-text-description">У Вас не возникнет проблем с поиском и посадкой пассажиров, так как встроенный навигатор приведёт вас к месту посадки пассажира.</p>
          </div>
          <div className="reason-block">
            <div className="reason-style-center">
              <IoIosAirplane className="reason-icon" />
            </div>
            <p className="reason-text-grid-label">Трансферы</p>
            <p className="reason-text-description">Регулярные трансферы в Национальный аэропорт «Минск», а так же из Национальный аэропорт «Минск» в город.</p>
          </div>
          <div className="reason-block">
            <div className="reason-style-center">
              <IoMdDocument className="reason-icon" />
            </div>
            <p className="reason-text-grid-label">Документы</p>
            <p className="reason-text-description">От Вас потребуются фото документов на авто и Водительское удостоверением, а так же наличие таксометра в автомобиле.</p>
          </div>
        </div>
      </div>
    )
  }
}