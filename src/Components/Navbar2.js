import React from 'react';
import '../App.css';
import cart from '../Images/cart.png';
import offer from '../Images/offer icon.png';
import logo from '../Images/LOGO.png';
import {FaSistrix} from 'react-icons/fa';

function Navbar2(){
    return(
    <div className= "Navbar2">
    <div className= "logo-column">
        <a href="index.html">
            <img src= {logo} alt= "logo" />
        </a>
    </div>
    <div className="search-column">
        <form className="search" action="#">
            <FaSistrix className="search-icon"></FaSistrix>
            <input type="text" className="search-input" placeholder="Search Products by title, supplier, category, brand etc..." name="search"></input>
            <button type="submit" className="search-btn">Search</button>
        </form>
    </div>
    <div>
        <a href="#">
            <img src={cart} alt="cart-icon" width="35" height="35"/>
        </a>
    </div> 
    <div>
        <a href="#">
            <img src={offer} alt="offer-icon" width="35" height="35"/>
        </a>
    </div>
    <div className="signup">
        <button type="submit" className="signup-btn ">Sign Up</button>
    </div>
    </div>
    )
    
}

export default Navbar2;