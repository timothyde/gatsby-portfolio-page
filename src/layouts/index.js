import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Sidebar from '../components/sidebar'

import './index.scss';


const Content = styled.div`
  position: static;
  overflow: visible;
  width: 60%;
  max-width: 1200px;
  margin-left: 40%;
  float: none;
  clear: none;

  @media screen and (max-width: 768px) {
      position: relative;
      width: 100%;
      margin: 0;
      width: 100%;
  }
`

const Layout = ({ children, data }) => (
  <div style={{ height: '100vh' }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Sidebar />
    <Content>
      {children()}
    </Content>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
