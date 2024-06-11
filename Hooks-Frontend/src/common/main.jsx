import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './Routing'
import AuthProvider from '../auth/AuthProvider'
import Navbar from '../components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <Navbar />
    <Routing />
  </AuthProvider>
  </React.StrictMode>,
)