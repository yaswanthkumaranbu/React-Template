// Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css'

const Navbar = () => { 
  const [cls,setClass] = useState("navbar");

  return (
    <header>
      <h3>Logo</h3>
    <nav className={cls}>
      <a href="/#">Home</a>
      <a href="/#">My works</a>
      <a href="/#">About</a>
      <a href="/#">Contact</a>
      <button onClick={()=>{setClass("navbar")}}>
      <FaTimes/>
      </button>
    </nav>
    <button className="visible" onClick={()=>{setClass("navbar-edit")}}>
        <FaBars/>
    </button>
    </header>
  );
  
};

export default Navbar;
