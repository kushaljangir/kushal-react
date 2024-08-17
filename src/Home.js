import React from 'react'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Headroom from 'react-headroom'
import Main from './components/Main/Main'
import Cards from './components/Cards/Cards'
import Exprience from './components/Exprience/Exprience'
import Slider from './components/Slider/Slider'
import Information from './components/Information/Information'
import Footer from './components/Footer/Footer'


function Home() {
  return (
    <div>
       <Headroom>
        <Header />
       <Navbar/>
      </Headroom>
      <Main />
      <Cards />
      <Exprience />
      <Slider/>
<Information/>
<Footer/>
    </div>
  )
}

export default Home
