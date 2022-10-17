import React, { useState,useEffect } from 'react'
import "./Navbar.css"
import {animateScroll as scroll ,Link as LinkS } from 'react-scroll'
import logo from '../../images/logoblanco.png'
import { FaBars } from "react-icons/fa";
export const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >=  80){
      setScrollNav(true)
    }else {
      setScrollNav(false)
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = ()=> {
    scroll.scrollToTop()
  }
    return (

        <div className="navbar">
            <div className="navbar-logo">
                <LinkS to="home" onClick={toggleHome}>   <img className="navbar-logo" src={logo} alt="logo"></img></LinkS>
            </div>
            <div className="navbar-menu">
                <LinkS to="home" smooth={true} 
                duration={500}
                spy={true} 
                exact='true' 
                offset={-80}   >Home</LinkS>
                <LinkS to="about" smooth={true} 
                duration={500}
                spy={true} 
                exact='true' 
                offset={-80}  >About</LinkS>
                <LinkS to="projects" smooth={true} 
                duration={500}
                spy={true} 
                exact='true' 
                offset={-80} >Projects</LinkS>
                <LinkS to="contact"smooth={true} 
                duration={500}
                spy={true} 
                exact='true' 
                offset={-80} >Contact</LinkS>
            </div>
            <div className="mobile-menu" onClick={toggle}>
                <FaBars />
            </div>
        </div>
    )
}