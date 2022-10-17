import React from 'react'
import './Banner.css'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Banner = () => {
    return (
        <header className="banner" id="home">
            <div className="banner-info-container">
                <div className='banner-info'>
                <h1 className="banner-title">Legacy ITC</h1>
                <p className="banner-paragraph">Consultoria SAP</p>
                </div>
                <div>
                    <p className='banner-p'>En Legacy ITC somos un equipo de desarrolladores enfocados en la creación de soluciones tecnológicas aplicadas a la plataforma SAP que permitan mejorar los procesos del negocio.
                        Siendo una firma boutique, hemos logrado siempre adaptarnos a las necesidades de nuestros clientes brindándoles un nivel de atención de calidad, rapido y personalizado.
                        El nivel de compromiso, atención y dedicación que proveemos a nuestros clientes nos distingue en cada emprendimiento.</p>
                </div>
            </div>
        </header>
    )
}
