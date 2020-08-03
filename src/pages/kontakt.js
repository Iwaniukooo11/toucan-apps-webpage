import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layout/layout"
import Header from "../components/Header/Header"
import Desc from "../components/Desc/Desc"
import ColorLink from "../components/ColorLink/ColorLink"

import ContactCard from "../components/ContactCard/ContactCard"

const MainTextWrap = styled.span``

const CustomTextWrap = styled.div`
  display: grid;
  row-gap: 15px;
  grid-area: text-wrap;
`

const StyledHeader = styled(Header)`
  max-width: 500px;
`
const StyledDesc = styled(Desc)`
  max-width: 500px;
`

const Contact = props => {
  return (
    <Layout page="contact" title="Kontakt">
      <CustomTextWrap>
        <StyledHeader numOfPink={2}>skontaktuj się z nami!</StyledHeader>
        <StyledDesc>{props.data.allStrapiStatic.edges[0].node.desc}</StyledDesc>
        <MainTextWrap>
          <Desc bold noMargin>
            Masz <strong>pomysł</strong> na <strong>aplikację</strong> do
            zrealizowania?
          </Desc>
          <ColorLink outside to="https://forms.gle/h3b2VXDjvQFgyre98">
            <strong>Napisz</strong> nam o niej!
          </ColorLink>
        </MainTextWrap>
      </CustomTextWrap>
      <ContactCard />
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  # query IndexQuery
  query {
    allStrapiStatic(filter: { page: { eq: "kontakt" } }) {
      edges {
        node {
          id
          desc
        }
      }
    }
  }
`
