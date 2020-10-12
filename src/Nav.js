import React, { useEffect, useState } from 'react'
import './nav.css';

function Nav(){
    const [show,handleShow]=useState(false);
    useEffect(()=>{
           window.addEventListener('scroll',()=>{
                 if(window.scrollY>100){
                       handleShow(true)
                 }
                 else{
                     handleShow(false);
                 }
           });
           return ()=>{
               return window.removeEventListener("scroll");
           };
    },[]);

    return(
        <div className={`nav ${show && "nav_black"}`}>
           <img  className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
           alt="Netflix logo"/>
           <img  className="nav_avtar"src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
        </div>
    )
}

export default Nav;