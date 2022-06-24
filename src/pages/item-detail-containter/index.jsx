import React, { useState, useEffect } from 'react';
import Itemdetail from '../../components/itemdetail';
import clases from '../../data';
import '../../components/itemdetail/item-detail.css'
import { useParams } from 'react-router-dom';
import './item-detail-container.css'


function getItem(id) {
  return new Promise ((resolve, reject) => {

      setTimeout (() => {
        if(id !== undefined){
          const item = clases.find(i => i.id === id);
          resolve(item)
        }
        else{
          resolve(clases)
        };},1000)
  })

}

function ItemDetailContainer () {
    const [clase, setClase] = useState() 
    const{ id } = useParams();

    useEffect(() => {
        getItem(id).then(respuestaPromise => {
          setClase(respuestaPromise);
        })
    
    },[id])
    
    return (

      <div className='div-itemDetail'>    
        <Itemdetail actividad={clase} />
      </div>
    )
}

export default ItemDetailContainer;