import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div>
            <div className="foot">
                <div className="banner">
                    <h2>Get The Latest News & Updates On Your Box</h2>
                    <button className='sub'>Subscribe</button>
                </div>
                <div className="left-foot">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod facilis, fuga ab rem delectus voluptatibus officia illo itaque? Consequuntur rerum animi voluptas accusamus commodi delectus, odio neque ut corporis!</p>

                    <div className="more2">
                        <i class="fa-solid fa-location-dot">:795 South Park Avenue, CA 94107</i>
                        <i class="fa-solid fa-envelope">:enquery@domain.com</i>
                        <i class="fa-solid fa-phone">: 908 875 7678</i>
                    </div>

                    <div className="uses">
                        <h3>Usefull Links</h3>
                        <ul>
                            <li> <span>&#11208;</span> General Info</li>
                            <li><span>&#11208;</span>Help Center</li>
                            <li><span>&#11208;</span>Our Services</li>
                            <li><span>&#11208;</span>Privacy Policy</li>
                            <li><span>&#11208;</span>Online Support</li>

                        </ul>
                    </div>
                    <div className="right-foot">
                        <img src="./images/about-1.jpg" alt="" />
                        <div className="true">
                            <p>Lorem ipsum dolor sit amet consectet adipisicing elit com...</p>
                            <span> Mar 30, 2020</span>
                            
                           <div className="social">
                           <i class="fa-brands fa-github"></i>
                           <i class="fa-brands fa-facebook"></i>
                           <i class="fa-brands fa-twitter"></i>
                           <i class="fa-brands fa-instagram"></i>
                           <i class="fa-brands fa-linkedin"></i>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
