import React from 'react'
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
import logo from '../../images/logoblanco.png'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css"
export const Footer = ({ toggle }) => {
  

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <div className='container-footer'>
            <div className="footer">
                <div className="footer-menu">
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
                <div className="footer-logo">
                    <LinkS to="home" onClick={toggleHome}>   <img className="footer-logo" src={logo} alt="logo"></img></LinkS>
                </div>

                <div className='icons-media'>
                    <a href="https://www.legacyitc.com/" target="_blank" rel="noreferrer"> <FaLinkedin /></a>
                    <a href="https://www.legacyitc.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://www.legacyitc.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>
            </div>

        </div>
    )
}