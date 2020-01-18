import React from 'react'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import TitleContainer from '../../components/TitleContainer'
import { economy, comfort } from './data'

import './rates.css'

export default class Rates extends React.Component {
  componentWillMount() {
    configureAnchors({ offset: -80, scrollDuration: 100 })
  }

  render() {
    return (
      <div className="rates-container">
        <ScrollableAnchor id="rates">
          <TitleContainer align="center">Тарифы</TitleContainer>
        </ScrollableAnchor>
        <div className="rates-grid">
          <div className="rates-container-table">
            <p className="rates-table-label">Эконом</p>
            <table>
              <tbody>
                {economy.map(item => (
                  <tr>
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
                  <tr>
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
}
