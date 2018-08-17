import React from 'react'
import styled from 'styled-components'

import Footer from './footer'

const FooterSection = styled.div`
  background-image: linear-gradient(
    135deg,
    ${props => props.primaryColor},
    ${props => props.secondaryColor}
  );
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 65px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`

export default ({ primaryColor, secondaryColor, children }) => {
  primaryColor = primaryColor ? primaryColor : '#f4b93d'
  secondaryColor = secondaryColor ? secondaryColor : primaryColor

  return (
    <FooterSection primaryColor={primaryColor} secondaryColor={secondaryColor}>
      <Footer />
    </FooterSection>
  )
}
