import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartwidget';
import './navbar.css'


function Navbar () {
    
    return (       
        <div className='navbar'>
            <img src="" alt="logo"  className='icono'/>
            <ul className='nav'>
               <li><Link to={'/'}>Inicio</Link></li>
               <li><Link to={'/category/Musica'}>Musica</Link></li> 
               <li><Link to={'/category/Teatro'}>Teatro</Link></li> 
               <li><Link to={'/contacto/'}>Contacto</Link></li>             
            </ul>
            <CartWidget  className='cartwidgetnav'/>
            
        </div>
                       
    )

}


export default Navbar;

