import React from "react"
import styled from "styled-components"
import Desc from "../Desc/Desc.js"

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colorPink};
  color: ${({ theme }) => theme.colorWhite};
  transition: 0.3s;
  opacity: ${props => (props.active ? 1 : 0.5)};
`

const ButtonComponent = props => {
  return (
    <Button {...props}>
      <Desc noMargin inherit bold>
        {props.children}
      </Desc>
    </Button>
  )
}

export default ButtonComponent
