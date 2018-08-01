import React from 'react'

import '../Rates/rates.css'

export default class Rates extends React.Component {
  render() {
    return (
      <div className="rates-container">
        <p className="rates-text-label">Тарифы</p>
        <div className="rates-grid">
          <div>
            <p className="rates-table-label">Эконом</p>
            <table>
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
            </table>
          </div>

          <div>
            <p className="rates-table-label">Комфорт</p>
            <table>
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
            </table>
          </div>
        </div>
      </div>
    )
  }
}