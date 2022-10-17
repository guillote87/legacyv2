import React from 'react'
import './Services.css'
import {Card} from '../Card/Card'


export const Services = () => {
    return (
        <>
        <div className='title'>
        <h1>Nuestros Servicios</h1>
    </div>
        <div className='container'>
          
            <div className='cards-container'>
             <Card/>
            </div>
        </div>
        </>
    )
}
