import React from 'react'
import img1 from '../../images/Clientes/Bumeran.png'
import img2 from '../../images/Clientes/agrofy-logo.png'
import img3 from '../../images/Clientes/navent.png'
import img4 from '../../images/Clientes/demotores.jpg'
import img5 from '../../images/Clientes/SNP.png'
import './Clients.css'

export const Clients = () => {
    return (
        <>
            <div className='title'>
                <h1>Confían en nosotros</h1>
            </div>
            <div className='container'>
                <div className='card-wrapper'>
                <div className='card-client card' >
                    <img id="bumeran-img"alt="" src={img1}></img>
                </div>
                <div className='card-client card2'>
                    <img alt="" src={img2}></img>
                </div>
                <div className='card-client card'>
                    <img alt="" src={img3}></img>
                </div>
                <div className='card-client card2'>
                    <img alt="" src={img4}></img>
                </div>
                <div className='card-client card'>
                    <img alt="" src={img5}></img>
                </div>
            </div>
        </div>
        </>
    )
}
