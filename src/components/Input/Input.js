import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Desc from "../Desc/Desc"
const ColorDot = styled.span`
  color: ${({ theme }) => theme.colorPink};
`
const Wrap = styled.div`
  max-width: 100%;
  margin-bottom: 15px;
`
const Input = styled.input`
  outline: none !important;
  width: 100%;
  margin-bottom: 10px;
  color: ${props =>
    props.active ? props.theme.colorPink : props.theme.colorBlack};
`

const Status = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props =>
    props.active ? props.theme.colorPink : props.theme.colorLightGrey};
  width: 100%;
  transition: 0.3s;
`
const InputContent = props => {
  // console.log(props)

  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(false)

  const onChangeHanlder = e => {
    const text = e.target.value
    setValue(text)
    // props.setValidation(text)

    // if (text.length >= 5) setIsValid(true)
    setIsValid(text.length >= 5)

    if (props.validationHandler) setIsValid(props.validationHandler(text))

    // const _validationObj = { ...props.validationObj }
    // _validationObj[props.title] = isValid
    // props.setValidation(_validationObj)
  }

  useEffect(() => {
    const _validationObj = { ...props.validationObj }
    _validationObj[props.obj.title] = { status: isValid, value }
    props.setValidation(_validationObj)

    // console.log(_validationObj)
  }, [value])

  return (
    <Wrap key={props.obj.title}>
      <label htmlFor={props.obj.title}>
        <Desc bold uppercase>
          {`${props.obj.title}`}
          <ColorDot>:</ColorDot>
        </Desc>
      </label>
      <Input
        type={props.obj.type || "text"}
        name={props.obj.title}
        as={props.obj.as || null}
        maxLength={props.max || null}
        // value={value}
        value={props?.validationObj[props.obj.title]?.value || ""}
        // onChange={e => setValue(e.target.value)}
        onChange={onChangeHanlder}
        rows={3}
        active={isValid}
      />
      <Status active={isValid} />
    </Wrap>
  )
}

export default InputContent
