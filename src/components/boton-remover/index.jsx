import React from 'react';
import './boton-remover.css'

function BotonRemover(props) {
  props.addToCart()
 return(
    <button className='bg-primary botonremover'>Remover</button>
 )    
}

export default BotonRemover