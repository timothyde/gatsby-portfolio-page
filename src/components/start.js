import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { ScrollContainer, ScrollDown } from './scroll';

import title from '../static/title.png';

const Start = styled.div`
  background-image: url(${title});
  background-position: center;
  background-size: cover;
  color: white;
  min-height: 100vh;
  overflow: hidden;
  padding: 40px 0;
  width: 100%;
  display: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const ImageContainer = styled.div`
  background: red;
  position: absolute;
  width: 60vw;
  height:100vh;
  left: 40%;
  top: 0%;
  overflow: hidden;

  .gatsby-image-outer-wrapper {
    transform: translateX(-25%);
  }
`

export default ({ image }) => {

  return (
    <Start>
      {/* <ImageContainer>
        <Img
          title="Captain Immo Screenshot"
          alt="Laptop displaying a web page"
          resolutions={image.childImageSharp.resolutions}
        />
      </ImageContainer> */}
      <ScrollContainer>
        <ScrollDown>
          <div />
        </ScrollDown>
      </ScrollContainer>
    </Start>
  );
};