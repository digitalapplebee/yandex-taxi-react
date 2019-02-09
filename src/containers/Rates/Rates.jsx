import React from 'react'
import TitleContainer from '../../components/TitleContainer'

import '../Rates/rates.css'

import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

export default class Rates extends React.Component {

  componentWillMount() {
    configureAnchors({ offset: -80, scrollDuration: 100 })
  }

  render() {
    return (
      <div className="rates-container">
        <ScrollableAnchor id={'rates'}>
          <TitleContainer align="center">Тарифы</TitleContainer>
        </ScrollableAnchor>
        <div className="rates-grid">
          <div className="rates-container-table">
            <p className="rates-table-label">Эконом</p>
            <table>
              <tbody>
                <tr>
                  <td>Минимальная стоимость (включено 0 мин и 2км)</td>
                  <td>Не более 3,9р</td>
                </tr>
                <tr>
                  <td>Бесплатное ожидание</td>
                  <td>10 мин</td>
                </tr>
                <tr>
                  <td>Платное ожидание (не включено в мин. стоимость)</td>
                  <td>Не более 0,12 р./мин</td>
                </tr>
                <tr>
                  <td>Далее по городу</td>
                  <td>Не более 0,4 р./км</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rates-container-table">
            <p className="rates-table-label">Комфорт</p>
            <table>
              <tbody>
                <tr>
                  <td>Минимальная стоимость (включено 3 км)</td>
                  <td>Не более 6 р.</td>
                </tr>
                <tr>
                  <td>Бесплатное ожидание</td>
                  <td>10 мин</td>
                </tr>
                <tr>
                  <td>Платное ожидание (не включено в мин. стоимость)</td>
                  <td>Не более 0,12 р./мин</td>
                </tr>
                <tr>
                  <td>Далее по городу</td>
                  <td>Не более 0,7 р./км</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}