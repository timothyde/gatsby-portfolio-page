import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  background-color: transparent;
  border: 2px solid ${props => (props.inverse ? '#fff' : '#fa8c16')};
  border-radius: 2rem;
  color: ${props => (props.inverse ? '#fff' : '#fa8c16')};
  display: inline-block;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.66rem 2rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: ${props => (props.inverse ? '#fff' : '#fa8c16')};
    color: ${props => (props.inverse ? '#fa8c16' : '#fff')};
    cursor: pointer;
  }
`

export default props => (
  <Button href={props.href} inverse={props.inverse}>
    {props.children}
  </Button>
)
