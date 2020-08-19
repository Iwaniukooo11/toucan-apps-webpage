import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Link, graphql } from "gatsby"

import Layout from "../layout/layout"
import Header from "../components/Header/Header"
import Desc from "../components/Desc/Desc"
import ColorLink from "../components/ColorLink/ColorLink"

import image from "../images/home-bg.svg"

const IndexPage = props => {
  return (
    <Layout page="404" title="404">
      <Header numOfPink={1} big>
        Nie znaleziono
      </Header>
      <Desc>Upewnij się, że wprowadzony adres jest prawidłowy</Desc>
    </Layout>
  )
}

export default IndexPage
