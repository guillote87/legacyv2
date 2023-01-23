import React from 'react'
import img1 from "../../images/Portfolio/dashboard.png"
import img2 from "../../images/Portfolio/pedidos.png"
import img3 from "../../images/Portfolio/constancia.png"
import "./Projects.css"

export const Projects = () => {
    return (
        <>
            <div>
            <div id="projects"className='title'>
                    <h2>Proyectos</h2>
                </div>
                <div className='portfolio-wrapper'>
               
                    <div className='portfolio-card card'>
                        <div className='portfolio-title'>
                            <h2>Dashboard analitico de pedidos</h2>
                        </div>
                        <a   href="https://legacy-dashboard.netlify.app/"  target="_blank" rel="noreferrer"  className='portfolio-img'>
                            <img src={img1}></img>
                        </a>
                        <div className='portfolio-p'>
                            <p>
                                Dashboard de listado de pedidos, con graficos VIZFrame realizada en SAPUI5 conectada a servicio OData
                            </p>
                        </div>
                    </div>
                    <div className='portfolio-card card2' >
                        <div className='portfolio-title'>
                            <h2>Listado de Pedidos</h2>
                        </div>
                        <a  href="https://legacy-pedidos-sapui5.netlify.app/"  target="_blank" rel="noreferrer" no className='portfolio-img'>
                            <img src={img2}></img>
                        </a>
                        <div className='portfolio-p'>
                            <p>
                               Aplicación de listado de pedidos, con filtros de Organización de venta, estado del pedido y rango de fecha, realizada en SAPUI5 conectada a servicio OData
                            </p>
                        </div>
                    </div>
                    <div  className='portfolio-card card'>
                        <div className='portfolio-title'>
                            <h2>Constancia de Inscripción</h2>
                        </div>
                        <a href="https://legacy-constanciacuit.netlify.app/"  target="_blank" rel="noreferrer" no className='portfolio-img'>
                            <img src={img3}></img>
                        </a>
                        <div className='portfolio-p'>
                            <p>
                                Aplicacion de consulta de Contancia de Inscripcion a partir de CUIT, realizada en SAPUI5
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
