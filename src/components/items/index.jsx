import React from 'react';
import { Link } from 'react-router-dom';
import BotonDetalle from '../boton-detalle';
import './item.css'



function Items({actividad}) {
    return (
            
        <div className='box'>
            <h3 className='titulo'>{actividad.Actividades}</h3>
            <img src={actividad.Img} alt="Foto actividad" className='imgitems'/>
            <small className='descripcion'> La frecuencia es: {actividad.Frecuencia}</small> 
            <p className='precio'>${actividad.Precio}</p>
            <Link to={`/item/${actividad.id}`}><BotonDetalle /></Link>
        </div>                 
    )
}
    



export default Items;