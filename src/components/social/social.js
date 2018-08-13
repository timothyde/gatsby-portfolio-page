import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  fill: #595959;
  margin: 4px;
  transition: all 300ms ease-in-out;

  &:hover {
    fill: ${props => props.color ? props.color : '#fa8c16'};
    cursor: pointer;
  }
`
export default (props) => (
  <Wrapper target='_blank' {...props}>
    {props.children}
  </Wrapper>
)