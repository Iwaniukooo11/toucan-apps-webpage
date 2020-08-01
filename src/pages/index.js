import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Link, graphql } from "gatsby"

import Layout from "../layout/layout"
import Header from "../components/Header/Header"
import Desc from "../components/Desc/Desc"
import ColorLink from "../components/ColorLink/ColorLink"

import image from "../images/home-bg.svg"

const StyledImage = styled.img`
  width: 100%;
  transform: scale(1.3) translateY(52px);
  align-self: flex-end;
  display: block;

  @media (min-width: 1024px) {
    max-width: 80%;
    justify-self: flex-end;
  }
  @media (min-width: 1200px) {
    max-width: 66%;
    transform: translate(20px, 10px);
    /* justify-self: flex-end; */
    position: fixed;
    right: 0;
    bottom: 0;
  }
`
const StyledLinkWrap = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 1200px) {
    margin: 20px 0;
  }
`

const IndexPage = props => {
  const pageWindow = typeof window === "undefined" ? undefined : window

  console.log(props.data)
  const [height, setHeight] = useState(
    pageWindow ? pageWindow.innerHeight : null
  )

  useEffect(() => {
    if (pageWindow)
      pageWindow.addEventListener("resize", () =>
        setHeight(pageWindow.innerHeight)
      )
  }, [])

  return (
    <Layout page="home" title="Home" height={height}>
      <Desc uppercase bold noMargin spacing center={false}>
        aplikacje dla społeczności
      </Desc>
      <Header numOfPink={1} big extra={"aplikacje dla społeczności"}>
        toucan apps
      </Header>
      <Desc>{props.data.allStrapiStatic.edges[0].node.desc}</Desc>
      <StyledLinkWrap>
        <ColorLink to="/aplikacje">Zobacz, co już mamy na rynku</ColorLink>
        <ColorLink to="/kontakt">
          Masz pomysł na <strong>aplikację</strong>? Napisz do nas
        </ColorLink>
      </StyledLinkWrap>
      <StyledImage src={image} alt="Człowiek opierający się o telefon" />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  # query IndexQuery
  {
    allStrapiStatic(filter: { page: { eq: "home" } }) {
      edges {
        node {
          id
          desc
        }
      }
    }
  }
`
