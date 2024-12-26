// Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css'
import { useRef } from "react";

const Navbar = () => { 
  const [cls,setClass] = useState("navbar");

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }


  return (
    <header>
      <h3>Logo</h3>
    <nav  ref={navRef}>
      <a href="/">Home</a>
      <a href="/myworks">My works</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <button className="nav-btn nav-close-btn" onClick={()=>{showNavbar()}}>
      <FaTimes/>
      </button>
    </nav>
    <button className="nav-btn" onClick={()=>{showNavbar()}}>
        <FaBars/>
    </button>
    </header>
  );
  
};

export default Navbar;
