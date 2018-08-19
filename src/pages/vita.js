import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section'
import Experience from '../components/resume/experience'
import Education from '../components/resume/education'
import Skills from '../components/resume/skills'
import Awards from '../components/resume/awards'
import FooterSection from '../components/footer/footerSection'

export default () => (
  <div>
    <Section primaryColor="#13c2c2" noPadding>
      <h1>Vita</h1>
    </Section>
    <Section primaryColor="#13c2c2">
      <Experience />
    </Section>
    <Section primaryColor="#faad14">
      <Education />
    </Section>
    <Section primaryColor="#F22544">
      <Skills />
    </Section>
    <Section primaryColor="#722ed1" lastSection>
      <Awards />
    </Section>
    <FooterSection primaryColor="#fa8c16" />
  </div>
)
