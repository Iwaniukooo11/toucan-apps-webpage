import React from "react"
import styled from "styled-components"
import Desc from "../Desc/Desc"

const Container = styled.article`
  display: grid;
  padding: 40px 35px 30px;
  row-gap: 25px;
  justify-items: center;
  border-radius: 12px;
  box-shadow: 0 10px 28px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 5;
  overflow: hidden;
  max-width: 350px;
  transition: 0.15s;
  background-color: ${({ theme }) => theme.colorWhite};
  &:hover {
    transform: scale(1.02) translateX(0px);
  }

  &::before {
    content: "";
    position: absolute;
    width: 40%;
    height: 15%;
    background-color: ${({ theme }) => theme.colorPink};
    bottom: 0;
    left: 0;
    z-index: 1;
    border-radius: 0% 100% 100% 0% / 30% 100% 0% 70%;
  }
`
const Img = styled.img`
  max-width: 120px;
  border-radius: 5px;
  @media (min-width: 768px) {
    max-width: 150px;
  }
`

const MiniHeader = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorPink};
  font-size: 24px;
`

const IconWrap = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.colorWhite};
  padding-left: 30%;
  width: 100%;
  transform: translate(35px);
  .icon {
    padding: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorPink};
    margin: 0 10px;
    transition: 0.3s;
    &:hover {
      /* background-color: ${({ theme }) => theme.colorPurple}; */
      opacity:0.7;
    }
  }
`

// const Stain = styled.div`
// `

const AppCard = ({ obj }) => {
  // console.log("obj: ", obj, process.env.NODE_ENV)
  return (
    <Container>
      <Img
        src={`${obj.image || obj.image?.publicURL}`}
        alt={`Logo aplikacji ${obj.title} `}
      />
      <MiniHeader>{obj.title}</MiniHeader>
      <Desc center noMargin>
        {obj.desc}
      </Desc>
      <IconWrap>
        <a href={obj.linkPlay} target="_blank">
          <i class="fab fa-google-play gp icon"></i>
        </a>
        <a href={obj.linkWeb} target="_blank">
          <i class="fas fa-globe web icon"></i>
        </a>
      </IconWrap>
    </Container>
  )
}

export default AppCard
