import React from 'react'
import styled from 'styled-components'

import Item from './item'

const Experience = styled.div`
  width: 100%;
`

export default () => (
  <Experience>
    <h2>Experience</h2>
    <Item
      institution="Kartenhaus Software GmbH"
      title="Fullstack Developer"
      timespan="05/2017 - Today"
      description="I am responsible for developing GIS software in the real estate field,
    which is centered around the analysis of a geolocation‘s surroundings
    using OSM data. The pillars of our tech stack are Node, React, ES6,
    Python, Django, Postgres, Postgis, AWS and many more."
      url="http://kartenhaus.io"
      urlName="kartenhaus.io"
    />
    <Item
      institution="Eindruckhochzwei"
      title="Founder"
      timespan="03/2014 - 09/2017"
      description="I founded an individual enterprise to serve international customers with high quality animation videos, software, web designs and other marketing material. I was responsible for everything from first sketch to final outcome."
      url="https://www.eindruckhochzwei.de"
      urlName="eindruckhochzwei.de"
    />
    <Item
      institution="Vodafone Deutschland GmbH"
      title="Vodafone Talent Circle"
      timespan="11/2015 - 05/2016"
      description="I was one of the lucky 12 talents chosen out of a pool of 300 interns at Vodafone to be part of their Talent Circle Program. Our team of four analyzed possible future propositions for consumers in an eSIM enabled IoT environment."
      url="https://www.vodafone.de/unternehmen/jobs/talent-circle.html"
      urlName="vodafone.de"
    />
    <Item
      institution="Vodafone Global Enterprise"
      title="Graduate"
      timespan="01/2016 - 03/2016"
      description="In order of completing my Bachelor thesis, I assessed VGE‘s competitive strategy approach regarding M2M, Cloud & Hosting and Core opportunities before a theoretical background and discussed key drivers for a successful implementation."
      url="https://www.enterprise.vodafone.com"
      urlName="enterprise.vodafone.com"
    />
    <Item
      institution="Vodafone Global Enterprise"
      title="Intern Sales Management & Solutions"
      timespan="04/2015 - 09/2016"
      description="During the internship, among other tasks, I supported the development of service revenue recognition guidelines, the calculation and analysis of CVM upselling potential and developed a high value service number campaign, optimizing the current analysis process with Excel VBA."
      url="https://www.enterprise.vodafone.com"
      urlName="enterprise.vodafone.com"
    />
    <Item
      institution="SIDACT GmbH"
      title="Office Management"
      timespan="06/2014 - 03/2015"
      description="As a student assistant, I was responsible for creating invoices and coordinating the communication between the company and our tax consultant as well as managing online content for our customers."
      url="https://www.sidact.com"
      urlName="sidact.com"
    />
    <Item
      institution="Hit Handelsgruppe GmbH und Co. KG"
      title="Dual Studies Program Participant"
      timespan="09/2012 - 08/2013"
      description="I took part in a dual studies programme, which incorporated practical retail experience into business administration studies."
      url="https://www.hit.de"
      urlName="hit.de"
    />
  </Experience>
)
