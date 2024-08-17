import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import "./Contact.css"
import Footer from './components/Footer/Footer'
function Contact() {
  return (
    <div>
       <Header/>
       <Navbar/>
       <div className="bg-ing">
        <div className="bg-color">
          
        </div>
    </div>
    <div className="about-box">
                <h2>Contact</h2>
            </div>

            <div className="contact-left">
<h3>Contact Info</h3>
<br />
<div className="new-ad">
<i class="fa-solid fa-location-dot"></i>
<h3>Adress</h3>
<div className="lor">
    <p> 795 South Park Avenue, Long Island,<br /> Newyork, NY 94107.</p>
</div>
</div>

<div className="new-ad">
<i class="fa-solid fa-envelope"></i>
<h3>
Email Address</h3>
<div className="lor">
    <p> info@mydomain.com
        <br />
    enquery@edu.com.</p>
</div>
</div>

<div className="new-ad">
<i class="fa-solid fa-phone"></i>
<h3>
Phone Number</h3>
<div className="lor">
    <p> +1 (396) 486 4709
        <br />
    +1 (396) 486 8419</p>
</div>
</div>
            </div>
<div className="contact-right">
    <h3>Touch</h3>

    <div className="fr-name">
        <input type="text" name="" id=""  placeholder='Name'/>
        <input type="email" name="" id="" placeholder='Email' />
    </div>
    <div className="long">
        <input type="text" name="" id="" placeholder='Subject' />
    </div>

    <div className="area">
        <textarea name="" id="" placeholder='Enter Massege' rows={5} cols={85}></textarea>
    </div>

    <div className="send">
        <button>Send Massege</button>
    </div>
   
</div>
<div className="down">
<Footer/>
</div>


    </div>
  )
}

export default Contact
