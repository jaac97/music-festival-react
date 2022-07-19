import React from 'react'
import ReactDOM from 'react-dom/client'
import './build/sass/app.scss';
import Description from './components/Description';
import Footer from './components/Footer';
import Galery from './components/Galery';
import Header from './components/Header'
import Hero from './components/Hero';
import LineUp from './components/LineUp';
import Tickets from './components/Tickets';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <Hero />
      <Description />
      <LineUp />
      <Galery />
      <Tickets />
      <Footer />
  </React.StrictMode>
)
