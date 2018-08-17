import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Button from '../components/buttons/button'

const NotFound = styled.div`
  padding: 65px;
  color: #fff;
  max-width: 900px;
`

export default () => (
  <NotFound>
    <h1>404</h1>
    <h2>You see 'nuffing, Jon Snow</h2>
    <Link to="/">
      <Button inverse={true}>back</Button>
    </Link>
  </NotFound>
)
