import React from 'react'
import styled from 'styled-components'

import Item from './item'

const Skills = styled.div`
  width: 100%;
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`

const Time = styled.h3`
  font-weight: 100;
  margin-bottom: 0 !important;
  margin-right: 8px;
  text-align: right;
  width: 40%;
`

const Label = styled.h3`
  margin-bottom: 0 !important;
  margin-right: 8px;
  text-align: left;
  width: 60%;
`

const Award = ({ label, time }) => (
  <Container>
    <Time>{time}</Time>
    <Label>{label}</Label>
  </Container>
)

export default ({ color }) => (
  <Skills>
    <h1>Achievements & Awards</h1>
    <Award label="Captain Immo Fernrohr launched" time="08/2018" />
    <Award label="Captain Immo Search Engine launched" time="03/2018" />
    <Award label="Best Regional Startup Bonn" time="06/2017" />
    <Award label="Abo Adieu iOS App released" time="06/2016" />
    <Award label="Vodafone Talent Circle 2015/2016" time="11/2015" />
    <Award label="Wake Tricktionary iOS App released" time="11/2015" />
  </Skills>
)
