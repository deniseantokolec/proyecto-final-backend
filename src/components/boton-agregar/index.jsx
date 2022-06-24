import React, { useState } from 'react';
import './boton-agregar.css'

function BotonAgregar(props) {
     const [count,setCount] = useState(props.initial);

    function handleAgregar() {
        if (count !== props.stock)
        return setCount(count + 1)
    }

    function handleQuitar() {
       if (count > props.initial)
       return setCount(count - 1)
    }


    function AgregarCarrito(){              
        props.onAdd(count)
        
        return(
            console.log('Has agregado productos a tu carrito')
            
            

        ) 
        
        
    }

  return (
    <div>
        <div>
           <div className='botones'>
                <button onClick={handleQuitar} className='quitar'>-</button>
                <span className='valor'>{count}</span>
                <button onClick={handleAgregar} className='agregar'>+</button>
            </div>   
            <div className='botonagregar'>
                <button onClick={AgregarCarrito} className='carrito'>Agregar a carrito</button>
            </div>
        </div>
    


    </div>
  )
}


export default BotonAgregar