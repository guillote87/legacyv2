import React from 'react'
import img1 from '../../images/Clientes/Bumeran.png'
import img2 from '../../images/Clientes/agrofy-logo.png'
import img3 from '../../images/Clientes/navent.jpg'
import img4 from '../../images/Clientes/demotores.jpg'
import img5 from '../../images/Clientes/SNP.jpg'
import './Clients.css'

export const Clients = () => {
    return (
        <>
            <div className='title'>
                <h1>Confían en nosotros</h1>
            </div>
            <div className='container'>
                <div className='card-client'>
                    <img src={img1}></img>
                </div>
                <div className='card-client card2'>
                    <img src={img2}></img>
                </div>
                <div className='card-client card3'>
                    <img src={img3}></img>
                </div>
                <div className='card-client card2'>
                    <img src={img4}></img>
                </div>
                <div className='card-client'>
                    <img src={img5}></img>
                </div>
            </div>
        </>
    )
}
