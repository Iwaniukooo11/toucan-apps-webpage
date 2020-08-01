import React, { useState } from "react"
// import { Link } from "gatsby"
import Link from "../../components/AniLink/AniLink"
import styled from "styled-components"
import image from "../../images/toucan-nav.svg"
// import image from "../../images/toucan-nav.png"
import Burger from "./Burger"
import Desc from "../../components/Desc/Desc"

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  /* height: 100vh !important; */
  /* background-color: ${({ theme }) => theme.colorWhite | "#fff"}; */
  background-color: #fff;
  z-index:10;
  padding: 10vh 5vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  transition:.3s;
  transform:${props => (props.isOpen ? null : "translateX(-100%)")};

  @media(min-width:768px){
      width:100%;
      flex-direction:row;
      height:auto;
      align-items:center;
      padding:20px 60px;
      /* background-color: transparent; */
      justify-content:space-between;
      transform:none;
      /* box-shadow: 0 10px 20px 0 rgba(0,0,0,0.03) */
  }
  @media(min-width:1200px){
    padding:20px 100px;

  }
`
const List = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colorBlack};
  &.active {
    color: ${({ theme }) => theme.colorPink};
    font-weight: bold;
  }
  /* @media (max-width: 768px) {
    opacity: 0;

    &.is-open {
      transition: ${props => ` .75s ${(props.index + 1) * 100 + 250}ms`};
      opacity: 1;
    }
  } */
`
const Img = styled.img`
  width: 100%;
`
const StyledDesc = styled(Desc)`
  color: inherit;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    margin: 0 10px;
  }
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colorPink};
  }
`

const ImgLink = styled(Link)`
  display: block;
  width: 60%;
  max-width: 300px;
  @media (min-width: 768px) {
    max-width: 100px;
  }
`

const data = ["", "aplikacje", "kontakt"]

const Nav = props => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Burger
        className={isOpen && "is-active"}
        onClick={() => setIsOpen(!isOpen)}
      />
      <StyledNav isOpen={isOpen}>
        <ImgLink to="/">
          <Img src={image} alt="Logo Toucan Apps" />
        </ImgLink>
        <List>
          {data.map((name, i) => (
            <StyledLink
              key={name}
              to={`/${name}`}
              activeClassName="active"
              index={i}
              className={isOpen ? "is-open" : null}
            >
              <StyledDesc>{name || "home"}</StyledDesc>
            </StyledLink>
          ))}
        </List>
      </StyledNav>
    </>
  )
}

export default Nav
