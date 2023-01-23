import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
import logo from '../../images/logoblanco.png'
import logoSap from '../../images/sap-logo-svg.svg'
import { FaBars } from "react-icons/fa";


export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <div   className={scrollNav ? "nav scroll" : "nav"}>
      <div className="navbar">
        <div className="navbar-logo">
          <LinkS to="home" onClick={toggleHome}>   <img className="navbar-logo" src={logo} alt="logo"></img></LinkS>
          <LinkS to="home" onClick={toggleHome}>   <img className="navbar-logosap" src={logoSap} alt="logo"></img></LinkS>
        </div>
        <div className="navbar-menu">
          <LinkS to="home" smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}   >Nosotros</LinkS>
          <LinkS to="services" smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}  >Servicios</LinkS>
          <LinkS to="projects" smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80} >Proyectos</LinkS>
          <LinkS to="contact" smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80} >Contacto</LinkS>
        </div>
        <div className="mobile-menu" onClick={toggle}>
          <FaBars />
        </div>
      </div>
    </div>
  )
}