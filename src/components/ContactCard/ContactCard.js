import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Header from "../Header/Header"
import Desc from "../Desc/Desc"
import Button from "../Button/Button"
import Input from "../Input/Input"

import emailjs from "emailjs-com"

const Wrap = styled.main`
  grid-area: card-wrap;
  margin: 30px 0;
  /* box-shadow: 0 10px 15px 3px rgba(0, 0, 0, 0.08); */
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  border-radius: 10px;
  overflow: hidden;
  /* padding: 30px 0; */
  padding: 0;
  display: grid;
  grid-template-areas: "send" "info";
  @media (min-width: 1024px) {
    margin: 50px 0 50px 50px;
    grid-template-areas: "send info";
  }
`

const MiniHeader = styled(Header)`
  font-size: 28px;
  margin-bottom: 30px;
  color: ${props => (props.white ? props.theme.colorWhite : null)};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.section`
  padding: 45px 20px;
  @media (min-width: 1024px) {
    padding: 45px 40px;
  }
`
const SendSection = styled(Section)`
  grid-area: send;
  @media (min-width: 1400px) {
    min-width: 380px;
  }
`
const InfoSection = styled(Section)`
  grid-area: info;
  width: 100%;
  background-color: ${({ theme }) => theme.colorPink};
`

const ContactList = styled.ul`
  display: grid;
  row-gap: 20px;
`
const ContactElement = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colorWhite};
  display: flex;
  align-items: center;

  .icon {
    margin-right: 15px;
    font-size: 20px;
  }
`

const ContactCard = props => {
  const [valids, setValids] = useState({})
  const [isActive, setIsActive] = useState(false)

  const emailValidator = text => /\S+@\S+\.\S+/.test(text)

  const submitHandler = e => {
    e.preventDefault()
    if (isActive) {
      setValids({})
      setIsActive(false)
      emailjs
        .sendForm(
          "gmail",
          process.env.GATSBY_TEMPLATE_ID,
          e.target,
          process.env.GATSBY_USER_ID
        )
        .then(
          result => {
            console.log(result.text)
          },
          error => {
            console.log(error.text)
          }
        )
    }
  }

  const dataForm = [
    { title: "imię", max: 15, name: "firstname" },
    {
      title: "email",
      type: "email",
      validationHandler: emailValidator,
      max: 15,
      name: "email",
    },
    { title: "wiadomość", as: "textarea", name: "textarea" },
  ]

  const dataContact = [
    { title: "Bydgoszcz", icon: "fas fa-map-marker-alt" },
    { title: "kontakt@toucan-apps.pl", icon: "far fa-envelope-open" },
    { title: "Toucan Apps", icon: "fab fa-google-play" },
  ]

  useEffect(() => {
    console.log(valids)
    setIsActive(
      Object.keys(valids).filter(key => valids[key].status).length === 3
    )
  }, [valids])

  return (
    <Wrap className="card-wrap">
      <SendSection>
        <MiniHeader center numOfPink={2}>
          Wyślij wiadomość
        </MiniHeader>
        <Form onSubmit={submitHandler}>
          {dataForm.map(el => (
            <Input
              obj={el}
              setValidation={setValids}
              validationObj={valids}
              validationHandler={el.validationHandler || null}
            />
          ))}
          <Button type="submit" active={isActive}>
            Wyślij
          </Button>
        </Form>
      </SendSection>
      <InfoSection>
        <MiniHeader center white numOfPink={0}>
          informacje
        </MiniHeader>
        <ContactList>
          {dataContact.map(el => (
            <ContactElement key={el.title}>
              <i className={`${el.icon} icon`}></i>
              <Desc inherit noMargin>
                {el.title}
              </Desc>
            </ContactElement>
          ))}
        </ContactList>
      </InfoSection>
    </Wrap>
  )
}

export default ContactCard
