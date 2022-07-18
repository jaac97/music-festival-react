import React from 'react'
import ReactDOM from 'react-dom/client'
import './build/sass/app.scss';
import Description from './components/Description';
import Header from './components/Header'
import Hero from './components/Hero';
import LineUp from './components/LineUp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <Hero />
      <Description />
      <LineUp />
  </React.StrictMode>
)
