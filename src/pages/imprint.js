import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Button from '../components/buttons/button'

const Imprint = styled.div`
  padding: 65px;
  color: #fff;
  max-width: 900px;

  ul {
    list-style-type: none;
    margin: 0;
    margin-bottom: 48px;
    padding: 0;
  }

  li {
    margin: 0;
  }
`

export default () => (
  <Imprint>
    <h1>Imprint/Impressum</h1>
    <h2>Angaben gemäß § 5 TMG</h2>
    <ul>
      <li>Timothy Krechel</li>
      <li>Oberlarer Platz 1</li>
      <li>53842 Troisdorf</li>
    </ul>
    <h3>Kontakt</h3>
    <ul>
      <li>Telefon: +49 177 858 32 44</li>
      <li>E-Mail: hello@timothy.de</li>
    </ul>
    <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
    <ul>
      <li>Timothy Krechel</li>
      <li>Oberlarer Platz 1</li>
      <li>53842 Troisdorf</li>
    </ul>
    <Link to="/">
      <Button inverse={true}>zurück/back</Button>
    </Link>
  </Imprint>
)
