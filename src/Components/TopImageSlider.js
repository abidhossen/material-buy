import React, { useState } from 'react';
import {SliderData} from './SliderData';
import '../App.css';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa' ;


const TopImageSlider= ({slide})=> {
  const [current, setCurrent]= useState(0);
  const length= slide.length;

  const nextSlide= ()=>{
    setCurrent(current== length-1 ? 0: current+1)
  }

  const prevSlide= ()=>{
    setCurrent(current== 0? length-1: current-1);
  }

  if (!Array.isArray(slide) || slide.length<= 0){
    return null;
  }



  return (
     <section className="slider" >
     <FaAngleLeft className="left-arrw" onClick={prevSlide}/>
     <FaAngleRight className="right-arrw" onClick={nextSlide}/>
    {SliderData.map((slide, index)=>{
      return(
        <div className={index === current? 'slide active': 'slide'} key={index}>
          {index === current && (<img className="slider-img" src={slide.image} alt='image'/>
           )}
        </div>
      )
        
    
    })}
    </section>);
    
    
    
};

export default TopImageSlider;