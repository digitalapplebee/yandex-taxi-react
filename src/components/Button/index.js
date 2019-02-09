import styled from 'styled-components'

const Button = styled.button`
  width: 230px;
  height: 44px;
  font-weight: 600;
  border-radius: 22px;
  background-color: rgb(255, 255, 70);
  border: none;
  cursor: pointer;
  transition: background-color: 0.3s ease-in;

  :hover {
    background-color: #ffff00;
  }

  :active :focus {
    outline: none;
  }
`
export default Button