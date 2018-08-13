import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import AboAdieu from '../components/showcases/aboadieu';
import CaptainImmo from '../components/showcases/captainimmo';
import Fernrohr from '../components/showcases/fernrohr';
import Footer from '../components/footer';
import Fortnite from '../components/showcases/fortnite';
import LF4D from '../components/showcases/lf4d';
import LTD15 from '../components/showcases/ltd15';
import LTD16 from '../components/showcases/ltd16';
import StartSection from '../components/start';

const StyledSection = styled.div`
  background-image: linear-gradient(135deg, ${props => props.primaryColor}, ${props => props.secondaryColor});
  box-shadow: 0px 6px 12px 0px rgba(0,0,0,${props => props.lastSection ? 0.24 : 0});
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 65px;
  width: 100%;
  margin-bottom: ${props => props.lastSection ? '0' : '0'};

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`

const Section = ({ primaryColor, secondaryColor, children, lastSection }) => {

  primaryColor = primaryColor ? primaryColor : '#f4b93d';
  secondaryColor = secondaryColor ? secondaryColor : primaryColor;
  lastSection = !!lastSection;

  return (
    <StyledSection primaryColor={primaryColor} secondaryColor={secondaryColor} lastSection={lastSection}>
      {children}
    </StyledSection>
  );
};

const StyledFooterSection = styled.div`
  background-image: linear-gradient(135deg, ${props => props.primaryColor}, ${props => props.secondaryColor});
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

const FooterSection = ({ primaryColor, secondaryColor, children }) => {

  primaryColor = primaryColor ? primaryColor : '#f4b93d';
  secondaryColor = secondaryColor ? secondaryColor : primaryColor;

  return (
    <StyledFooterSection primaryColor={primaryColor} secondaryColor={secondaryColor} >
      {children}
    </StyledFooterSection>
  );
};

const IndexPage = styled.div`
  overflow: hidden;
`

export default (props) => {
  console.log(props);
  return (
    <IndexPage>
      <Media query='(min-width: 769px)'>
        {matches =>
          matches && <StartSection image={props.data.startImage} />
        }
      </Media>
      <Section primaryColor='#39c35d'>
        <AboAdieu image={props.data.aboAdieuImage} />
      </Section>
      <Section primaryColor='#faad14'>
        <Fernrohr image={props.data.fernrohrImage} />
      </Section>
      <Section primaryColor='#fa541c'>
        <LTD16 />
      </Section>
      <Section primaryColor='#F22544'>
        <LTD15 />
      </Section>
      <Section primaryColor='#722ed1'>
        <CaptainImmo image={props.data.captainImmoImage} />
      </Section>
      <Section primaryColor='#010103'>
        <LF4D />
      </Section>
      <Section primaryColor='#13c2c2' lastSection>
        <Fortnite image={props.data.fortniteImage} />
      </Section>
      <FooterSection primaryColor='#fa8c16'>
        <Footer />
      </FooterSection>
    </IndexPage>
  )
}

export const pageQuery = graphql`
  query ImageQuery {
    aboAdieuImage: imageSharp(id: { regex: "/aboadieu/" }) {
      sizes(maxWidth: 900 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fortniteImage: imageSharp(id: { regex: "/fortnite/" }) {
      sizes(maxWidth: 900 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fernrohrImage: imageSharp(id: { regex: "/fernrohr/" }) {
      sizes(maxWidth: 900 ) {
        ...GatsbyImageSharpSizes
      }
    }
    captainImmoImage: imageSharp(id: { regex: "/captainimmo/" }) {
      sizes(maxWidth: 900 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`