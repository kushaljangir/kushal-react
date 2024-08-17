import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Courses from './Courses';
import Contact from './Contact';
import Legal from './Legal';
import Cart from './Cart';
function App() {
  return (
    <div>

<Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/legal' element={<Legal/>}/>
        <Route path='/cart' element={<Cart/>}/>
     
      </Routes>

     


    </div>
  )
}

export default App
