import React from 'react';
import styled from 'styled-components';

const ShowcaseCaption = styled.div`

  margin-top: ${props => props.inset ? '-130px' : '0px'};

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  @media screen and (max-width: 768px) {

    h2 {
      margin-top: 8px;
      font-size: 24px;
      line-height: 28px;
    }
  }
  @media screen and (max-width: 992px) {
    margin-top: 0px;
  }
`

const ShowcaseImage = styled.div`
  text-align: center;
  max-width: 50%;
  margin-left: 25%;
`

const ShowcaseVideo = styled.div`
  text-align: center;
  margin-bottom: 18px;
`

const ShowcaseEmbed = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 8px;
  overflow: hidden;

  iframe, object, embed {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export { ShowcaseCaption, ShowcaseEmbed, ShowcaseImage, ShowcaseVideo }