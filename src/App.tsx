import React from 'react'
import { logger } from './utils/globalLogger'
import { Helmet } from 'react-helmet'
import './assets/css/main.css'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/shared/Common/navbar/Navbar'
function App() {
  logger.warn('Hello')
  return (
    <div className="App">
      <Helmet>
        <title>My Shop</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
