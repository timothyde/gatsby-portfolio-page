import React from 'react'
import styled from 'styled-components'

import Item from './item'

const Skills = styled.div`
  width: 100%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`

const Label = styled.h3`
  margin-bottom: 0 !important;
  margin-right: 8px;
  text-align: right;
  width: 40%;
`

const Scale = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 8px;
  overflow: hidden;
  width: 60%;

  &:after {
    background: #fff;
    content: '';
    display: block;
    height: 8px;
    width: ${props => `${props.value * 10}%`};
  }
`

const Skill = ({ value, label, color }) => (
  <Container>
    <Label>{label}</Label>
    <Scale value={value} />
  </Container>
)

export default ({ color }) => (
  <Skills>
    <h1>Skills</h1>
    <h2>Code & Tech</h2>
    <Skill value={9.5} label="HTML" />
    <Skill value={9} label="CSS" />
    <Skill value={9} label="SCSS/SASS/Less" />
    <Skill value={9.5} label="JavaScript (ES5,ES6)" />
    <Skill value={9.5} label="React" />
    <Skill value={9.5} label="jQuery" />
    <Skill value={8.5} label="Bootstrap" />
    <Skill value={9} label="Node.js" />
    <Skill value={8.5} label="REST" />
    <Skill value={7} label="Docker" />
    <Skill value={7.5} label="Swift" />
    <Skill value={6.5} label="VBA" />
    <Skill value={6} label="PHP" />
    <h2>Design & Illustration</h2>
    <Skill value={9.5} label="Photoshop" />
    <Skill value={9.5} label="After Effects" />
    <Skill value={8.5} label="Illustrator" />
    <Skill value={8} label="InDesign" />
    <Skill value={9.5} label="Cinema4D" />
    <h2>Office</h2>
    <Skill value={9} label="Word" />
    <Skill value={9.5} label="PowerPoint" />
    <Skill value={9.5} label="Excel" />
    <h2>Language</h2>
    <Skill value={10} label="German (native)" />
    <Skill value={9.5} label="English (C2)" />
    <Skill value={4} label="French (B1)" />
  </Skills>
)
