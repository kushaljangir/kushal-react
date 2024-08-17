import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import "./Cart.css"
import { useState } from 'react'
import Footer from './components/Footer/Footer'

function Cart() {

  const[count,setcount]=useState(0);

const increment=()=>{
  setcount(count +1);
  
}
const decrement=()=>{
  setcount(count -1);
}

const[count1,setcount1]=useState(0);

const increment1=()=>{
  setcount1(count1 +1);
  
}
const decrement1=()=>{
  setcount1(count1 -1);
}

const[count2,setcount2]=useState(0);

const increment2=()=>{
  setcount2(count2 +1);
  
}
const decrement2=()=>{
  setcount2(count2 -1);
}
const[count3,setcount3]=useState(0);

const increment3=()=>{
  setcount3(count3 +1);
  
}
const decrement3=()=>{
  setcount3(count3 -1);
}
  return (
    <div>
      <Header/>
<Navbar/>
<div className="bg-ing">
        <div className="bg-color">
          
        </div>
    </div>
    <div className="about-box">
                <h2>Shope</h2>
            </div>

<div className="tab">
<table>
  <tr className='change'>
    <th>Product</th>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <th>Price</th>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <th>Quantity</th>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <th>Subtotal</th>
  </tr>
  <tr className='agre'>
    <td><img src="./images/about-1.jpg" alt="" /></td>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <td>$49.00</td>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <td>
    <div className="ot">{count}</div>
    <div className="arrow">
    <div className="to" onClick={increment}>&#11161;</div>
   <br />
   <div className="do" onClick={decrement}>&#11163;</div>
   </div>
   </td>
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   <td>$49.00</td>
   
  </tr>
  <tr>
  <td><img src="./images/about-1.jpg" alt="" /></td>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <td>$49.00</td>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <td>
    <div className="ot">{count1}</div>
    <div className="arrow">
    <div className="to" onClick={increment1}>&#11161;</div>
   <br />
   <div className="do" onClick={decrement1}>&#11163;</div>
   </div>
   </td>
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   <td>$49.00</td>
  </tr>
  <tr>
  <td><img src="./images/about-1.jpg" alt="" /></td>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <td>$49.00</td>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <td>
    <div className="ot">{count2}</div>
    <div className="arrow">
    <div className="to" onClick={increment2}>&#11161;</div>
   <br />
   <div className="do" onClick={decrement2}>&#11163;</div>
   </div>
   </td>
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   <td>$49.00</td>
  </tr>
  <tr>
  <td><img src="./images/about-1.jpg" alt="" /></td>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <td>$49.00</td>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <td>
    <div className="ot">{count3}</div>
    <div className="arrow">
    <div className="to" onClick={increment3}>&#11161;</div>
   <br />
   <div className="do" onClick={decrement3}>&#11163;</div>
   </div>
   </td>
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   <td>$49.00</td>
  </tr>
  <button className='dd'>Add</button>
</table>

</div>
<div className="cart-right">
  <div className="main-box">
    <h3>Cart Summary</h3>

    <div className="total">
  <h5>Sub Total <span>
  $147.00</span> </h5>  

  <h5>Shipping and Handling <span>
  $147.00</span> </h5>  

  <h5>Vat (2.5%) <span>
  $147.00</span> </h5>  

  <h5 className='red'>Discount (10%) <span>
  $147.00</span> </h5>  
    </div>
    <hr />
    <br />
    <h5 className='corner'>Grand Total <span>
  $147.00</span> </h5> 

  <button className='proced'>Proceed to checkout</button> 
  </div>

</div>
     <div className="down1">
     <Footer/>    
     </div>
    
    </div>
  )
}

export default Cart
