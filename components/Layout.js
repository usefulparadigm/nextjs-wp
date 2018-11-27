import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

const Layout = (props) => (
  <React.Fragment>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/style.css" />
    </Head>
    <main role="main" className="container">
      <Header />
      <div className="starter-template">
        {props.children}
      </div>
    </main>
  </React.Fragment>
)

export default Layout
