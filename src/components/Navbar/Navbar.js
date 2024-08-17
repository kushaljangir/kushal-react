import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="nav">
            <ul>
            <Link className='li' to="/">Home</Link>
            <Link className='li' to="/about">About</Link>
            <Link className='li' to="/courses">Courses</Link>
            <Link  className='li'to="/contact">Contact</Link>
            <Link className='li' to="/legal">Legal</Link>
            <Link className='li' to="/cart">Shope</Link>
            </ul>
        </div>
       <Link className="cart" to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link> 
      </div>
    </div>
  )
}

export default Navbar
