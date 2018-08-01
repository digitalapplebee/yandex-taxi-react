import React from 'react'

import './application.css'

export default class Application extends React.Component {
  render(){
    return(
      <div>
        <p>Приложение</p>
        <div>
          <div>Кошелек</div>
          <div>Удобство</div>
          {/* img */}
          <div>Большой поток заказов</div>
          <div>Бонусы</div>
        </div>
      </div>
    )
  }
}