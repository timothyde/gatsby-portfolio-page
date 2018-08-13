import React from 'react';
import styled from 'styled-components';


const ScrollContainer = styled.div`
  height: 48px;
  text-align: center;
  width: 50%;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
    width: 100%;
  }
`

const ScrollDown = styled.div`
  position: relative;
  width: 30px;
  height: 48px;
  top: 50%;
  margin-top: -24px;
  border: 2px solid ${props => props.inverse ? '#fa8c16' : '#fff'};
  border-radius: 25px;

  div {
    position: absolute;
    left: 50%;
    content: '';
    width: 4px;
    height: 8px;
    background: ${props => props.inverse ? '#fa8c16' : '#fff'};
    margin-left: -2px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(16px);
    }
  }
`

export { ScrollContainer, ScrollDown };