import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Sidebar from '../components/sidebar'

import ti57 from '../static/apple-icon-57x57.png'
import ti60 from '../static/apple-icon-60x60.png'
import ti72 from '../static/apple-icon-72x72.png'
import ti76 from '../static/apple-icon-76x76.png'
import ti114 from '../static/apple-icon-114x114.png'
import ti120 from '../static/apple-icon-120x120.png'
import ti144 from '../static/apple-icon-144x144.png'
import ti152 from '../static/apple-icon-152x152.png'
import ti180 from '../static/apple-icon-180x180.png'
import icon192 from '../static/android-icon-192x192.png'
import favicon32 from '../static/favicon-32x32.png'
import favicon96 from '../static/favicon-96x96.png'
import favicon16 from '../static/favicon-16x16.png'
import manifest from '../static/manifest.json'

import './index.scss'

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
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
        { name: 'keywords', content: 'timothy, krechel, webpage, portfolio' },
        { name: 'msapplication-TileColor', content: '#fa8c16' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#fa8c16' },
      ]}
      link={[
        { rel: 'apple-touch-icon', sizes: '57x57', href: `${ti57}` },
        { rel: 'apple-touch-icon', sizes: '60x60', href: `${ti60}` },
        { rel: 'apple-touch-icon', sizes: '72x72', href: `${ti72}` },
        { rel: 'apple-touch-icon', sizes: '76x76', href: `${ti76}` },
        { rel: 'apple-touch-icon', sizes: '114x114', href: `${ti114}` },
        { rel: 'apple-touch-icon', sizes: '114x114', href: `${ti114}` },
        { rel: 'apple-touch-icon', sizes: '120x120', href: `${ti120}` },
        { rel: 'apple-touch-icon', sizes: '144x144', href: `${ti144}` },
        { rel: 'apple-touch-icon', sizes: '152x152', href: `${ti152}` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${ti180}` },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: `${icon192}`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${favicon32}`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: `${favicon96}`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${favicon16}`,
        },
        {
          rel: 'manifest',
          href: `${manifest}`,
        },
      ]}
    />
    <Sidebar />
    <Content>{children()}</Content>
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
        description
      }
    }
  }
`
