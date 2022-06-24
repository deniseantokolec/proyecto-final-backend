import React  from 'react'
import './contacto.css'


function Contacto() {
  return (
    <div className='div-contacto'>
        <h1 className='contacto'>Contacto</h1>
        <h2 className='masinfo'>Para conocer maás imformación contactarse a los siguientes numeros:</h2>
        <p className='tel'>Tel: (+54)911-9878-3689</p>
        <p className='whatsapp'>(+54)911-6544-1187</p>
        <h2 className='mensaje'>O sino enviar un mensaje a:</h2>
        <p className='email' >artistas@acadmemiadeartistas.org.ar</p>
    </div>
  )
}

export default Contacto