import React from 'react';
import '../App.css';
import {FaHeart} from 'react-icons/fa';
import ProductImg from '../Images/ProductImg.png';


function ProductCard(props){

    return(
        
        
            <a className="product" href="index.html">
            <div className="ProductCard">
            <img className="product" src={props.image} alt="Product_Image"></img>
            <FaHeart className="FavIcon"></FaHeart>
            <p className="ProductName" >{props.name}</p>
            <p className="ProductDisc">{props.disc}</p>
            <p className="ProductPrice">{props.price}</p>
            </div>
            </a>
        
    )
    
}

export default ProductCard;
