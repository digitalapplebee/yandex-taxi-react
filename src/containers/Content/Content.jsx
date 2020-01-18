import React, { Component } from 'react'
import Button from '../../components/Button'
import Input from '../../components/InputText'
import car from '../../img/car-front.png'
import Background from '../../img/minsk.jpg'
import './content.css'

const backgroundImageStyle = {
  backgroundImage: `url(${Background})`,
  width: '100%',
  height: '750px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: '-3',
}

class Content extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChangeName = event => this.setState({ name: event.target.value })

  handleChangeNumber = event => this.setState({ number: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    const { name, number } = this.state
    const data = {
      name,
      number,
    }

    fetch('https://someaddress.com/user', {
      method: 'post',
      body: data,
      // eslint-disable-next-line no-console
    }).then(res => console.log(res))
  }

  render() {
    return (
      <div className="content-container" style={backgroundImageStyle}>
        <h1 className="content-text">
          Приглашаем водителей на автомобили организации для работы в
          Яндекс.Такси
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="content-submit-form">
            <Input
              onChange={this.handleChangeName}
              placeholder="Ваше имя или фамилия"
            />
            <Input
              onChange={this.handleChangeNumber}
              placeholder="Номер телефона"
            />
          </div>
          <div className="content-button-center">
            <Button>Отправить заявку</Button>
          </div>
        </form>
        <p className="content-text-calling">или звоните</p>
        <a href="tel:+375333766580" className="content-text-number">
          +375 (33) 376-65-80
        </a>
        <img src={car} className="content-img-car" alt="Машина Яндекс.Такси" />
      </div>
    )
  }
}

export default Content
