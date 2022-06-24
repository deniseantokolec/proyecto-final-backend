import React from 'react'
import Items from '../items/'



function ItemList({clases}) {

    return(
        <>
            {clases.map (actividades => {
                return (
                    <Items actividad={actividades} key={actividades.id}/>    
                )
            })}
        </>
    )    
   
   
                  

}
  


export default ItemList                        

