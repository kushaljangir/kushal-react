import React from 'react'
import "./Cards.css"
function Cards() {
  return (
    <div>
      <div className="cards">
        <div className="card1">
        <i class="fa-solid fa-heart"></i>
        <h3>Popluar Courses</h3>
        <p>Lorem ipsum dolor sit amet consectetur, </p>
        </div>

        <div className="card2">
       <i class="fa-solid fa-school"></i>
        <h3>Modern Library</h3>
        <p>Lorem ipsum dolor sit amet consectetur, </p>
        </div>

        <div className="card3">
        <i class="fa-solid fa-chalkboard-user"></i>
        <h3>Qualified Teacher</h3>
        <p>Lorem ipsum dolor sit amet consectetur, </p>
        </div>
      </div>
    </div>
  )
}

export default Cards
