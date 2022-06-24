import React from 'react';
import shoppingcart1 from './shoppingcart1.png';
import { Link } from 'react-router-dom';
import useCartContext from '../../store';
import './cartwidget.css'

function CartWidget(item) {
   const{ CartQuantity } = useCartContext()
 return (
   <div className='cartwidget-box'>
     <Link to={'/cart'}><img src={shoppingcart1} className="cartwidget" alt="Carrito" /></Link>
     <h4 className='cartquantity'>{CartQuantity(item.quantity)}</h4>
   </div>
   
 )
}

export default CartWidget