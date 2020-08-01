import React, { Fragment } from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  text-transform: uppercase;
  text-align: ${props => (props.center ? "center" : "left")};

  color: ${({ theme }) => theme.colorPurple};
  /* padding-bottom: 25px; */
  font-size: 32px;

  @media (min-width: 768px) {
    font-size: ${props => (props.big ? "46px" : "40px")};
  }
  @media (min-width: 1024px) {
    font-size: ${props => (props.big ? "60px" : "48px")};
  }
  @media (min-width: 1200px) {
    font-size: ${props => (props.big ? "70px" : "54px")};
  }
  @media (min-width: 1400px) {
    font-size: ${props => (props.big ? "80px" : "62px")};
  }
`
const StyledColor = styled.span`
  color: ${({ theme }) => theme.colorPink};
`
const Header = props => {
  const numOfPink = props.numOfPink ?? 1
  return (
    <StyledHeader {...props}>
      {props.children
        .split(" ")
        .map((el, i) =>
          i < numOfPink ? (
            <StyledColor key={el}>{`${el} `}</StyledColor>
          ) : (
            <Fragment key={el}>{`${el} `}</Fragment>
          )
        )}
    </StyledHeader>
  )
}

export default Header
