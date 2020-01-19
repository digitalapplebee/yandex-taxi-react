import React from 'react'
import TitleContainer from 'components/TitleContainer'
import { economy, comfort } from './data'

import './rates.css'

function Rates() {
  return (
    <div className="rates-container">
      <TitleContainer align="center">Тарифы</TitleContainer>
      <div className="rates-grid">
        <div className="rates-container-table">
          <p className="rates-table-label">Эконом</p>
          <table>
            <tbody>
              {economy.map(item => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rates-container-table">
          <p className="rates-table-label">Комфорт</p>
          <table>
            <tbody>
              {comfort.map(item => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Rates
