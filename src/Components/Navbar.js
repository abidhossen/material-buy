import React from 'react';
import '../App.css';
import cart from '../Images/cart.png';
import offer from '../Images/offer icon.png';

function Navbar(){
  return(
    <div className="Navbar">
      <div className="column left">
      <div className="Logo">
       <span className="Red">Material </span>
       <span className="Blue">Design</span>
      </div>
   </div>
    <div className="column middle">
      <form className="Searchbar" action="index.html">      
         <button type="submit" className="Searchicon"><i class="fa fa-search"></i></button>
         <input type="text" className="SearchInput" placeholder="Search Products by title, supplier, category, brand etc..." name="search"/>
         <button type="submit" className="Searchbtn">Search</button>
      </form>
    </div>
      <div className="column right">
        <div className="row">
          <div className="column text navEle enquiry">
            <a className="Link Blue" href="index.html">Post your enquiry</a>
          </div>
          <div className="column navEle">
            <a className="Link Blue" href="index.html">
              <img src= {cart} alt="Cart" width="35" height="35"/>
            </a>
          </div>
          <div className="column navEle">
            <a className="Link Blue" href="index.html">
            <img src={offer} alt="Offer" width="35" height="35"/>
            </a>
          </div>
          <div className="column navEle">
           <form  action="index.html">
             <button type="submit" className="Searchbtn signBtn">Sign Up</button>
           </form>
          </div>
        </div>
      </div>
    </div>
  )
 

}

    

export default Navbar;
