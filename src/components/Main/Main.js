import React from 'react'
import "./Main.css"
import { Link } from 'react-router-dom'
function Main() {
  return (
    <div>
      <div className="image">
      <img src="./images/slider-1.jpg" alt="" />
      <div className="title">WELCOME TO EDULYN</div>
      <h1>Best University In This Region <br /> Join With Us Today</h1>
<div className="btn0">
<button className='btn5'>Our Course</button>
     <Link button className='new' to="/contact">Contact </Link> 
</div>
      
      </div>
      </div>
   
  )
}

export default Main
