import React from 'react'
import styled from 'styled-components'

import Item from './item'

const Education = styled.div`
  width: 100%;
`

export default () => (
  <Education>
    <h1>Education</h1>
    <Item
      institution="Bonn-Rhein-Sieg University of Applied Sciences"
      title="Innovation & it Management (M.Sc.)"
      timespan="06/2014 - Today"
      description="Graduating in 03/2019."
      url="https://h-brs.de"
      urlName="h-brs.de"
    />
    <Item
      institution="Bonn-Rhein-Sieg University of Applied Sciences"
      title="Business Administration (B.Sc.)"
      timespan="09/2013 - 03/2016"
      description="My main fields of study were Economics and Financial Services."
      url="https://h-brs.de"
      urlName="h-brs.de"
    />
    <Item
      institution="DHBW Mannheim"
      title="Business Administration (B.A.)"
      timespan="09/2012 - 07/2013"
      url="http://dhbw.de"
      urlName="dhbw.de"
    />
    <Item
      institution="Heinrich-Böll-Gymnasium Troisdorf"
      title="Universiy Entrance Diploma (Abitur)"
      timespan="08/2003 - 06/2012"
    />
    <Item
      institution="Sternenschule Troisdorf"
      title="Elementary"
      timespan="08/1999 - 07/2003"
    />
  </Education>
)
