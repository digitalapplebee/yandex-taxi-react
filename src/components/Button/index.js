import styled from 'styled-components'

const Button = styled.button`
  width: 230px;
  height: 44px;
  font-weight: 600;
  border-radius: 22px;
  font-size: 22px;
  background: #ffff46;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in;

  ${props =>
    props.requirement &&
    `
      width: 280px;
      letter-spacing: 1px;

      @media (max-width: 500px) {
        font-size: 20px;
      }
    `};

  :hover {
    background: #ffff00;
  }

  :active,
  :focus {
    outline: none;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    letter-spacing: 0;
  }
`

export default Button
