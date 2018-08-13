import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Button from '../components/buttons/button';

const NotFound = styled.div`
  padding: 65px;
  color: #fff;
  max-width: 900px;
`

export default () => (
  <NotFound>
    <h2>404</h2>
    <h4>You see 'nuffing, Jon Snow</h4>
    <Link to='/'>
      <Button inverse={true}>back</Button>
    </Link>
  </NotFound>
)