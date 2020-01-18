import React from 'react'
import ScrollableAnchor, {
  configureAnchors,
  goToTop,
} from 'react-scrollable-anchor'
import { FaCheck } from 'react-icons/fa'
import Button from '../../components/Button'
import TitleContainer from '../../components/TitleContainer'
import carTopImg from '../../img/car-top.png'
import data from './data'

import './requirements.css'

export default class Requirements extends React.Component {
  componentWillMount() {
    configureAnchors({ offset: -80, scrollDuration: 800 })
  }

  render() {
    return (
      <div className="requirements-container">
        <div>
          <ScrollableAnchor id="requirements">
            <TitleContainer align="left" className="requirements-title">
              Условия работы и требования
            </TitleContainer>
          </ScrollableAnchor>
          <div className="requirements-list-block">
            <ul>
              {data.map(item => (
                <li key={item.id}>
                  <FaCheck className="requirements-list-check-icon" />
                  {item.title}
                </li>
              ))}
            </ul>
            <Button onClick={goToTop} requirement>
              СТАТЬ ВОДИТЕЛЕМ
            </Button>
          </div>
        </div>
        <img src={carTopImg} alt="Машина" />
      </div>
    )
  }
}
