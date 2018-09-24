import React from 'react'
import axios from 'axios'

import car from '../../img/car.png'

import './content.css'

import Background from '../../img/minsk.jpg'

const backgroundImageStyle = {
  backgroundImage: `url(${Background})`,
  width: '100%',
  height: '750px',
  // backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // filter: 'brightness(50%)',

  // position: 'absolute',
  // top: '-20px',
  // filter: 'blur(1px)',
  zIndex: '-3',
};

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      number: '',
    }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeNumber = this.handleChangeNumber.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value })
  }

  handleChangeNumber = event => {
    this.setState({ number: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      name: this.state.name,
      number: this.state.number
    }

    //edit address
    axios.post(`https://someaddress.com/user`, { data })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })

  }

  render() {
    return (
      <div className="content-container" style={backgroundImageStyle}>

        <p className="content-text">Приглашаем водителей на автомобили организации для работы в Яндекс.Такси</p>

        <form onSubmit={this.handleSubmit} >
          <div className="content-submit-form">
            <input type="text" onChange={this.handleChangeName} placeholder="Ваше имя или фамилия" />
            <input type="text" onChange={this.handleChangeNumber} placeholder="Номер телефона" />
          </div>

          <div className="content-button-center">
            <button type="submit" className="content-button-submit">Отправить заявку</button>
          </div>
        </form>

        <p className="content-text-calling">или звоните</p>

        <a href="tel:+375333766580" className="content-text-number">+375 (33) 376-65-80</a>
        <img className="content-img-car" src={car} alt="Yandex Car" />
      </div>
    )
  }
}