import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layout/layout"
import Header from "../components/Header/Header"
import Desc from "../components/Desc/Desc"
import AppCard from "../components/AppCard/AppCard"

import imgCBDZ from "../images/cbdz.png"

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

const data = {
  desc:
    "Nasze produkty są dostępne w sklepie play oraz są bezpłatne. Założeniem aplikacji jest łatwość użNasze produkty są dostępne w sklepie play oraz są bezpłatne. Założeniem aplikacji jest łatwość użytkowania i przyjazny interfejsytkowania i przyjazny interfejs",
  apps: [
    {
      title: "Co by dziś zjeść?",
      desc:
        "Aplikacja, która pokaże Ci przepisy dań, jakie możesz zrobić ze sładników dostępnych w kuchni.",
      linkWeb: "https://iwaniukooo11.github.io/app-webpage/",
      linkPlay: "https://github.com/Iwaniukooo11/app-webpage/",
      image: imgCBDZ,
    },
  ],
}

const Apps = props => {
  return (
    <Layout page={"apps"} title="Aplikacje">
      <Header numOfPink={1}>Nasze aplikacje mobilne</Header>
      <Desc>{data.desc}</Desc>
      <Main>
        <List>
          {/* <AppCard obj={props.data.allStrapiApplication.edges[0].node} /> */}
          {data.apps.map(obj => (
            <Element itemscope itemtype="http://schema.org/App">
              <AppCard obj={obj} />
            </Element>
          ))}
        </List>
      </Main>
    </Layout>
  )
}

export default Apps

// export const pageQuery = graphql`
//   #   query IndexQuery
//   query {
//     allStrapiStatic(filter: { page: { eq: "aplikacje" } }) {
//       edges {
//         node {
//           id
//           desc
//         }
//       }
//     }
//     #   }

//     allStrapiApplication {
//       edges {
//         node {
//           title
//           desc
//           linkPlay
//           linkWeb
//           image
//         }
//       }
//     }
//   }
// `
