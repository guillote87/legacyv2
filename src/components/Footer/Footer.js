import React, { useState, useEffect } from 'react'
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
import logo from '../../images/logoblanco.png'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css"
export const Footer = ({ toggle }) => {
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
        <div className='container-footer'>
            <div className="footer">
            <div className="footer-menu">
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
                    <LinkS to="contact" smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} >Contact</LinkS>
                </div>
                <div className="footer-logo">
                    <LinkS to="home" onClick={toggleHome}>   <img className="footer-logo" src={logo} alt="logo"></img></LinkS>
                </div>

            <div className='icons-media'>
                <a href="https://www.linkedin.com/in/guillermoquattrocchi/" target="_blank" rel="noreferrer"> <FaLinkedin /></a>
                <a href="https://github.com/guillote87" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.instagram.com/gq_dev/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
            </div>
        
        </div>
    )
}