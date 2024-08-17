import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div>
      <div className="line">
        <div className="line-left">
            <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="addres">
          
            <span><h5>795 South Park Avenue, CA 94107.</h5></span>
            </div>
            <span className='str'></span>
            <div className="question"><h5>Have Questions</h5></div>
            <span className='str2'></span>
        </div>
       
        <div className="line-right">
       
            <div className="icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
           
            </div>
            
            <div className="login">
            <i class="fa-solid fa-user"></i>
            <div className="user">Login</div>

            <button className='btn'>Apply Now</button>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Header
