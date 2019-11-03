import styled, { css } from 'styled-components'

const Button = styled.button`
  width: 230px;
  height: 44px;
  font-weight: 600;
  border-radius: 22px;
  background: #ffff46;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in;

  ${props =>
    props.requirement &&
    css`
      padding: 15px 42px;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      border: none;
      border-radius: 30px;
      background-color: #ffdb4d;
      cursor: pointer;
      width: 280px;
    `};

  :hover {
    background: #ffff00;
  }

  :active :focus {
    outline: none;
  }
`

export default Button
