import React, { useState } from 'react';
import BotonAgregar from '../boton-agregar';
import useCartContext from '../../store';
import {Link} from 'react-router-dom'
import './item-detail.css'

function Itemdetail({ actividad }) {
    const [isInCart,setIsInCart] = useState(false)
    const {addToCart} = useCartContext();
  
    function onAdd(count){
      setIsInCart(true)
      addToCart(actividad,count)
      console.log('Agregaste:', actividad,count);
      
    } 
     
    if(!actividad){
      return <h3 className='cargando'>Cargando...</h3>
      
    }
    else{
  
   
      return (
        <div className='boxdetail'>
          <h3 className='titulodetail'>{actividad.Actividades}</h3>
          <img src={actividad.Img} alt={actividad.Actividades} className='imagendetail'/>
          <h4 className='descripciondetail'> La frecuencia es: {actividad.Frecuencia}</h4> 
          <p className='preciodetail'>${actividad.Precio}</p>
          {isInCart ? 
            <div>
            <Link to={'/cart'} className='verdetalle'>Ver carrito</Link>
            </div> 
          : <BotonAgregar onAdd={onAdd} initial={1} stock={actividad.Stock}/>}
  
        
        
       </div>                 
      )
    }  
  }
  
  export default Itemdetail;