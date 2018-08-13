import React from 'react';
import Media from 'react-media';
import styled from 'styled-components';

import Button from './buttons/button';
import { ScrollContainer, ScrollDown } from './scroll';
import signature from '../static/signature.svg';
import LinkedIn from './social/linkedin';
import Xing from './social/xing';
import Github from './social/github';
import Vimeo from './social/vimeo';

const Sidebar = styled.div`

  background-color: #fff;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 0;
  height: 100%;
  padding: 35px;
  position: fixed;
  top: 0;
  width: 40%;
  z-index: 0;

  @media screen and (max-width: 768px) {
    padding: 24px;
    position: relative;
    width: 100%;
    height: 100vh;
  }
`

const SidebarContent = styled.div`

  margin-bottom: 3rem;
  margin-left: 35px;
  width: 80%;
  color: #595959;
  
  h1, h2, h3, h6 {
    color: #fa8c16;
    margin: 0;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-bottom: 24px;
    width: 100%;
    h2 {
      font-size: 24px;
      line-height: 28px;
    }
  }
`

const Signature = styled.div`
  height: auto;
  padding: 70px;
  width: 65%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 0px;
    width: 80px;
  }
`

const Teaser = styled.p`
  margin-top: 16px;
`

const TeaserLink = styled.a`
  color: #fa8c16;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
`

const SocialContainer = styled.div`
  margin: 16px 0;
`

export default () => {

  return (
    <Sidebar>
      <SidebarContent>
        <Signature>
          <img src={signature} />
        </Signature>
        <h2>
          Tech enthusiast,
        </h2>
        <h2>
          startup affine,
        </h2>
        <h2>
          great at googling
        </h2>
        <h6>(oh and I like fancy colors and video games)</h6>
        <SocialContainer>
          <LinkedIn color='#0077b5' href='https://www.linkedin.com/in/timothyde' />
          <Xing color='#026466' href='https://www.xing.com/profile/Timothy_Krechel/' />
          <Github color='#c9510c' href='https://github.com/timothyde' />
          <Vimeo color='#69b4e5' href='https://vimeo.com/user32649705' />
        </SocialContainer>
        <Teaser>
          I am a Student seeking my Master's Degree <TeaserLink href=''>@BRSU</TeaserLink> and
          currently working as a Fullstack Developer <TeaserLink target='_blank' href='http://kartenhaus.io'>@Kartenhaus</TeaserLink>.
        </Teaser>
        <Button href="mailto:hello@timothy.de?subject=Hey%20mate%2C%20how's%20it%20going%3F">Say Hello!</Button>
        <Media query="(max-width: 768px)">
          {matches =>
            matches && (
              <ScrollContainer>
                <ScrollDown inverse>
                  <div />
                </ScrollDown>
              </ScrollContainer>
            )
          }
        </Media>
      </SidebarContent>
    </Sidebar>
  )
}