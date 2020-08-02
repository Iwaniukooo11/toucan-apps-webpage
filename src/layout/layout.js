import React from "react"
import Helmet from "react-helmet"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import "@fortawesome/fontawesome-free/css/all.css"
import Nav from "../partials/Nav/Nav"
import ogpImg from "../images/ogp-img.jpg"

import theme from "../utils/theme"

const Container = styled.div`
  padding: 65px 30px 20px;
  /* padding: 0 30px; */
  /* margin: 65px auto 20px; */
  margin:0;

  min-height: 100%;
  display: grid;
  width:100%;
  justify-items: flex-start;
  align-content: flex-start;
  align-items: center;
  row-gap: 15px;
  overflow-x: hidden;
  position: relative;
  @media(min-width:768px){
   padding:105px 80px 30px;
   /* padding:0 80px; */
   /* margin: 105px auto; */

  }
  @media(min-width:1024px){
   padding:120px 95px 30px;
   /* padding:0 95px; */
   /* margin: 80px auto; */
   /* margin:0; */

  }
  @media(min-width:1200px){
   padding:140px 110px 30px;
   /* padding:0 110px; */
   /* margin: 140px auto; */

  }
  @media(min-width:1400px){
   padding:160px 160px 40px;
   /* padding:0 160px; */
   /* margin: 160px auto; */
   margin:0;
  }

  &.home {
    min-height:${props => props.height + "px" || null};
    grid-template-rows:auto auto auto 1fr;
    /* min-height:100%; */
    @media(max-width:640px){
    padding-top:80px;
    }
      @media(max-width:640px){
        padding-bottom:0;
      }
      @media(min-width:1024px){
        overflow:hidden;
        padding-bottom:100px;
      }
      @media(min-width:1200px){
      /* overflow:hidden; */
      grid-template-rows:auto;
      align-content:center;
      padding-bottom:140px;

      }
    } 
    &.contact{
      grid-template-areas:'text-wrap''card-wrap';
      
      @media(min-width:1400px){
        display:grid;
        grid-template-areas:'text-wrap card-wrap';
      }
    }
  }
`
const Global = createGlobalStyle`
*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
a{
  color:inherit;
  text-decoration:none;
}
html,body,#___gatsby,#gatsby-focus-wrapper{
    height:100%;
}
body{
  font-family: "Poppins", sans-serif;
  scrollbar-color:${theme.colorPink} ${theme.colorPink};
  scrollbar-width:0px;
  overflow-x:hidden;

}
::-webkit-scrollbar {
  display: none;
  width:0px;
}
::-webkit-scrollbar-track{
  background:red;
}
::-webkit-scrollbar-thumb{
  background:red;
}
a,button{
  outline-color:rgba(0,0,0,0);
  &:hover{
    cursor:pointer;
  }
}
ul{
  list-style:none;
}

input,button,textarea{
  border:none;
  outline-color:transparent;
  font:inherit;
  &:focus{
    border:none;
  outline-color:transparent;

  }
}
`

const Layout = props => {
  if (process.env.NODE_ENV !== "development") console.log = function () {}
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Helmet prefix="og: http://ogp.me/ns#">
          <html prefix="og: http://ogp.me/ns#" lang="pl" />
          <meta
            property="og:title"
            content={`${
              props.title === "Home" ? "" : props.title + " | "
            }  Toucan Apps - Aplikacje dla społeczności`}
          />
          <title>{`${
            props.title === "Home" ? "" : props.title + " | "
          }  Toucan Apps - Aplikacje dla społeczności`}</title>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.toucan-apps.pl/" />
          <meta property="og:image" content={ogpImg} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Toucan Apps - Aplikacje dla społeczności"
          />
          <meta property="og:description" content="--todo--" />
          <meta name="description" content="--todo--" />
          <meta name="twitter:card" content="--todo--" />
          <meta name="twitter:image" content={ogpImg} />
          <meta name="twitter:site" content="toucan-apps" />
          <meta
            name="twitter:title"
            content="Toucan Apps - Aplikacje dla społeczności"
          />
          <meta name="twitter:description" content="--todo--" />
          <meta
            name="keywords"
            content="Tukan, Toucan, Apps, Aplikacje, Iwaniuk, Co, by, dziś, zjeść, Społeczność, Społeczności, dla, Telefon, Android, Iphone, Studio"
          ></meta>

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"
          />
          <link rel="canonical" href="https://www.toucan-apps.pl" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "Studio",
          "url": "http://www.toucan-apps.pl",
          "name": "Toucan Apps - Aplikacje dla społeczności",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "todo@gmail.com",
            "contactType": "Kontakt"
          }
        }
      `}
          </script>
        </Helmet>
        <Nav />
        <Container className={props.page} height={props.height}>
          {props.children}
        </Container>
      </>
    </ThemeProvider>
  )
}

export default Layout
