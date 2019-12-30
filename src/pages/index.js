import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="title">
        <div className="title-item">{'ANDRES'}</div>
        <div className="triangle-container">
          <div className="text">{'IN THE'}</div>
          <div className="triangle" />
        </div>
        <div className="title-item">{'SHELL'}</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
