import Layout from 'components/Layout'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import IndexRoutes from './Routes/index.routes'

export default function App() {
  return (
    <Router>
      <Layout>
        <IndexRoutes />
      </Layout>
    </Router>
  )
}
