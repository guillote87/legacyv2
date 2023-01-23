import React from 'react'
import img1 from '../../images/sapui5/Evolution.png'
import img2 from '../../images/sapui5/remote.svg'
import img3 from '../../images/sapui5/factory.svg'
import img4 from '../../images/sapui5/plataformas.png'
import './Card.css'

export const Card = () => {
    return (
        <>
            <div className='card'>
                <div className='card-service'>
                    <div className='card-service-title'>
                        <h2>Plataformas</h2>
                    </div>
                    <div className='card-service-p'>
                        <p>SAP R3</p>
                        <p>SAP S/4 HANA</p>
                        <p>SAP FIORI</p>
                        <p>SAP SAPUI5</p>
                    </div>
                </div>
                <div className='card-image'>
                    <img src={img1}></img>
                </div>
            </div>
            <div className='card2'>
                <div className='card-service'>
                    <div className='card-service-title'>
                        <h2>Servicios de Consultoria Remota</h2>
                    </div>
                    <div className='card-service-p'>
                        <p>Al implementar nuevos productos o actualizar los ambientes ya instalados, Legacy ITC puede proveerle consultores funcionales y tecnicos para trabajar de forma remota asegurando de esta forma el éxito de su proyecto a un costo mas bajo que al utilizar recursos on-site.</p>
                    </div>
                </div>
                <div className='card-image'>
                    <img src={img2}></img>
                </div>
            </div>
            <div className='card2'>
                <div className='card-service'>
                    <div className='card-service-title'>
                        <h2>Software Factory</h2>
                    </div>
                    <div className='card-service-p'>
                        <p>Nos avalan mas de diez años de experiencia en el diseño y desarrollo de aplicaciones, Software Factory, soporte e implementaciónes aplicadas a la plataforma SAP.</p>
                    </div>
                </div>
                <div className='card-image'>
                    <img src={img3}></img>
                </div>
            </div>
            <div className='card'>
                <div className='card-service'>
                    <div className='card-service-title'>
                        <h2>Proyectos SAP</h2>
                    </div>
                    <div className='card-service-p'>
                        <p>Aseguramos el exito de su proyecto reduciendo riesgos y costos</p>
                    </div>
                </div>
                <div className='card-image'>
                    <img src={img4}></img>
                </div>
            </div>
        </>
    )
}



