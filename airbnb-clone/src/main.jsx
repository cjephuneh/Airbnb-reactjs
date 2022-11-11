import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import './index.css'
import Home from './Home'
import Banner from './Banner'
import Footer from './Footer'
import Searchpage from './Searchpage'
import Card from './Card'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Banner />
    <Footer />
    <Searchpage />
    <Card />

  </React.StrictMode>
)
