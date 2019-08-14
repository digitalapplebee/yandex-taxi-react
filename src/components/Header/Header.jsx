import React, { Component } from 'react'
import Logo from '../Logo'
import MenuIcon from '../../assets/menu.svg'
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor'
import { FaVk, FaFacebookF, FaTwitter } from 'react-icons/fa'
import './header.css'

const links = [
  {
    name: 'ПОЧЕМУ ЯНДЕКС.ТАКСИ?',
    link: '#rates',
  },
  {
    name: 'ТАРИФЫ',
    link: '#application',
  },
  {
    name: 'ПРИЛОЖЕНИЕ',
    link: '#requiremets',
  },
  {
    name: 'ПОДКЛЮЧИТЬСЯ?',
    link: '#reason',
  },
]

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolling: false,
      active: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { scrolling } = this.state;
    if (window.scrollY === 0 && scrolling === true) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY !== 0 && scrolling !== true) {
      this.setState({ scrolling: true });
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      active: !prevState.active,
    }))
  }

  render() {
    const { scrolling } = this.state
    
    return (
      <div className={`${scrolling ? 'header-container-scrolled' : 'header-container'}`}>
        <ScrollableAnchor id={'home'}>
          <Logo />
        </ScrollableAnchor>
        <nav className={`${scrolling ? 'nav-scrolled' : 'header-nav'}`}>
          <ul className={`${scrolling ? 'ul-t' : 'ul-scrolled'}`}>
            {
              links.map(item => {
                // <li className={`${scrolling ? ';;'}`}
              })
            }
            <li className={`${scrolling ? 'li-scrolled': ''}`}>
              <a href="#reason">ПОЧЕМУ ЯНДЕСК.ТАКСИ?</a>
            </li>
            <li className={`${scrolling ? 'li-scrolled': ''}`}>
              <a href="#rates">ТАРИФЫ</a>
            </li>
            <li className={`${scrolling ? 'li-scrolled': ''}`}>
              <a href="#application">ПРИЛОЖЕНИЕ</a>
            </li>
            <li className={`${scrolling ? 'li-scrolled': ''}`}>
              <a href="#requirements">ПОДКЛЮЧИТЬСЯ</a>
            </li>
            <li className={`${scrolling ? 'li-scrolled': ''}`}>
              <a href="#"><FaVk /></a>
            </li>
            <li className={`${scrolling ? 'li-scrolled': ''}`}>
              <a href="#"><FaFacebookF /></a>
            </li>
            <li className={`${scrolling ? 'li-scrolled': ''}`}>
              <a href="#"><FaTwitter /></a>
            </li>
            <li>
                <img src={MenuIcon} className="menu-icon" alt="Menu" />
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
