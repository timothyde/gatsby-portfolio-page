import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
`

const Summary = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Links = styled.div`
  margin-bottom: 24px;
  width: 50%;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const FooterLink = styled.a`
  color: #fff;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  transition: all 300ms ease-in-out;

  &:hover {
    color: #fff1b8;
    cursor: pointer;
  }
`

const Quote = styled.blockquote`
  font-style: italic;
`

const GatsbyFooterLink = styled(Link)`
  color: #fff;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  transition: all 300ms ease-in-out;

  &:hover {
    color: #fff1b8;
    cursor: pointer;
  }
`

export default (props) => (
  <Footer>
    <Links>
      <h4>Links</h4>
      <ul>
        <li><GatsbyFooterLink to='/'>Home</GatsbyFooterLink></li>
        <li><GatsbyFooterLink to='/imprint/'>Imprint</GatsbyFooterLink></li>
        <li><FooterLink target='_blank' href='https://www.linkedin.com/in/timothyde'>LinkedIn</FooterLink></li>
        <li><FooterLink target='_blank' href='https://www.xing.com/profile/Timothy_Krechel/'>Xing</FooterLink></li>
      </ul>
    </Links>
    <Summary>
      <h4>Summary</h4>
      <p>If you have a great project or just want to chat, <FooterLink underline href='mailto:hello@timothy.de'>hit me up!</FooterLink></p>
      <p>&copy;2018 Timothy Krechel</p>
    </Summary>
  </Footer>
)