import React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
  background-color: ${props => props.color ? props.color : '#565656'};;
  border-radius: 2rem;
  display: inline-block;
  padding: .1rem .75rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 2px;
`

export default (props) => (
  <Tag color={props.color}>
    {props.children}
  </Tag>
)