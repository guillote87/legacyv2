import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
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
          <Link to="/">   <img className="navbar-logo" src={logo} alt="logo"></img> </Link>
          <Link to="/">   <img className="navbar-logosap" src={logoSap} alt="logo"></img> </Link>
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
          <Link to="portfolio">Proyectos</Link>
          <LinkS to="contacto" smooth={true}
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