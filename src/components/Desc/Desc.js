import styled from "styled-components"

const Desc = styled.p`
  color: ${props => (props.inherit ? "inherit" : props.theme.colorBlack)};
  text-transform: ${props => (props.uppercase ? "uppercase" : null)};
  font-weight: ${props => (props.bold ? "bold" : null)};
  letter-spacing: ${props => (props.spacing ? "3px" : null)};

  text-align: ${props => (props.center ? "center" : "left")};

  line-height: 140%;
  margin-bottom: ${props => (props.noMargin ? null : "20px")};
  max-width: 600px;
  font-size: 18px;

  @media (min-width: 960px) {
    font-size: 19px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`

export default Desc
