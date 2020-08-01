import React from "react"
// import { Link } from "gatsby"
import Link from "../AniLink/AniLink"
import styled from "styled-components"
import Desc from "../Desc/Desc"

const Text = styled(Desc)`
  color: ${({ theme }) => theme.colorPink};
  font-weight: bold;
  display: inline-block;
  margin-bottom: 0;
  transition: 0.3s;
  &:hover {
    transform: translateX(20px);
  }

  &::first-letter {
    transition: 0.3s;
    color: ${({ theme }) => theme.colorPurple};
  }
`
const Row = styled.span`
  color: ${({ theme }) => theme.colorBlack};
  font-weight: bold;
  /* font-family: Arial; */
  margin-right: 10px;
  transition: 0.3s;

  display: inline;
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  margin: 5px 0;

  &:hover {
    .text {
      transform: translateX(15px);
    }
    .row {
      transform: translateX(3px);
      color: ${({ theme }) => theme.colorPink};
    }
  }
`
const ALink = styled.a`
  display: flex;
  align-items: flex-start;
  margin: 5px 0;

  &:hover {
    .text {
      transform: translateX(15px);
    }
    .row {
      transform: translateX(3px);
      color: ${({ theme }) => theme.colorPink};
    }
  }
`

const ColorLink = props => {
  return props.outside ? (
    <ALink href={props.to} target="_blank">
      <Row className={"row"}>{">"}</Row>
      <Text className={"text"}>{props.children}</Text>
    </ALink>
  ) : (
    <StyledLink to={props.to}>
      <Row className={"row"}>{">"}</Row>
      <Text className={"text"}>{props.children}</Text>
    </StyledLink>
  )
}

export default ColorLink
