import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80px;
  background-color: #f5f5f5;
`
const Text = styled.p`
  text-align: center;
  color: gray;
  font-size: 13px;
  font-family: "Lato", sans-serif;
  word-spacing: 1px;
  color: #707070;
  line-height: 22px;
  letter-spacing: 0.01em;

  @media (max-width: 1240px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
  }
`

const Wrapper = () => {
  return (
    <Footer>
      <Text>© 2018 ООО «Inv» | УНП 185734586</Text>
      <Text>Свидетельство о государственной регистрации 185734586 от 21.01.2018г.</Text>
    </Footer>
  )
}

export default Wrapper
