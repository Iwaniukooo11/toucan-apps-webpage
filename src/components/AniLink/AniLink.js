import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import theme from "../../utils/theme"

const Link = props => {
  return (
    <AniLink
      {...props}
      cover
      direction="left"
      bg={theme.colorPink}
      duration={1.5}
    >
      {props.children}
    </AniLink>
  )
}

export default Link
