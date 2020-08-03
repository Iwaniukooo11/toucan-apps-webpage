import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layout/layout"
import Header from "../components/Header/Header"
import Desc from "../components/Desc/Desc"
import AppCard from "../components/AppCard/AppCard"

const Main = styled.main`
  width: 100%;
`

const List = styled.ul`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 3;
  &::before {
    content: "";
    position: absolute;
    height: 70%;
    width: 100%;
    top: 15%;
    left: 0;
    z-index: -1;
    border-radius: 15px;
  }

  @media (min-width: 768px) {
    overflow: auto;
    padding: 40px 20px;
    &::before {
      background-color: ${({ theme }) => theme.colorLightGrey};
    }
    @media (min-width: 1200px) {
      padding: 40px 40px;
    }
  }
`
const Element = styled.li`
  position: relative;
  z-index: 4;
`

const Apps = props => {
  return (
    <Layout page={"apps"} title="Aplikacje">
      <Header numOfPink={1}>Nasze aplikacje mobilne</Header>
      <Desc>{props.data.allStrapiStatic.edges[0].node.desc}</Desc>
      <Main>
        <List>
          {/* <AppCard obj={props.data.allStrapiApplication.edges[0].node} /> */}
          {props.data.allStrapiApplication.edges.map(({ node }) => (
            <Element itemscope itemtype="http://schema.org/App">
              <AppCard obj={node} />
            </Element>
          ))}
        </List>
      </Main>
    </Layout>
  )
}

export default Apps

export const pageQuery = graphql`
  #   query IndexQuery
  query {
    allStrapiStatic(filter: { page: { eq: "aplikacje" } }) {
      edges {
        node {
          id
          desc
        }
      }
    }
    #   }

    allStrapiApplication {
      edges {
        node {
          title
          desc
          linkPlay
          linkWeb
          image
        }
      }
    }
  }
`
