import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
  background-image: linear-gradient(
    135deg,
    ${props => props.primaryColor},
    ${props => props.secondaryColor}
  );
  box-shadow: 0px 6px 12px 0px
    rgba(0, 0, 0, ${props => (props.lastSection ? 0.24 : 0)});
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${props => (props.noPadding ? '64px 64px 0px 64px' : '64px')};
  width: 100%;
  margin-bottom: ${props => (props.lastSection ? '0' : '0')};

  @media screen and (max-width: 768px) {
    padding: 24px;
    ${props => (props.noPadding ? 'padding-bottom: 0px;' : '')};
  }
`

const Section = ({
  primaryColor,
  secondaryColor,
  children,
  lastSection,
  noPadding,
}) => {
  primaryColor = primaryColor ? primaryColor : '#f4b93d'
  secondaryColor = secondaryColor ? secondaryColor : primaryColor
  lastSection = !!lastSection

  return (
    <StyledSection
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      lastSection={lastSection}
      noPadding={noPadding}
    >
      {children}
    </StyledSection>
  )
}

export default Section
