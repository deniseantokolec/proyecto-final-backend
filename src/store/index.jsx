import React, { createContext, useContext, useState } from 'react'


const CartContext = createContext({
    cart: [],
    addToCart: () =>{},
    removeFromCart: ()=>{},
    clearCart: ()=>{},
    isInCart: ()=>{},
    CartQuantity: ()=>{},
    CartPrice: ()=>{}
});
const {Provider} = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
           const newCart= cart.map(cartitem => {
                if(cartitem.id === item.id){
                    const copyItem = {...cartitem}
                    copyItem.quantity += quantity;
                    return copyItem;
                }
                   
                else
                return cartitem;    
                
            })
            setCart(newCart)
        }
        else{
            
            const newItem = {...item,quantity};
            setCart([...cart,newItem]);
        }
    }    
        
        

    const removeFromCart = (id) => {
        const newCart =[...cart]
        const CartFiltred = newCart.filter(item =>{
            return item.id !== id;
        });
        setCart(CartFiltred)
    }

    const clearCart = () => {
       setCart([])
    
    }

    const isInCart = (id) => {
        const estaEnCart= cart.some(itemCart => itemCart.id === id);
        return estaEnCart
    }                                          
       
    const CartQuantity = () => {
        //const total = 0;
        return cart.reduce((total, value) => {return total + value.quantity}, 0)
        
    }

    const CartPrice = () =>{
        //const totalprice = 0;    
        return cart.reduce((total, item) => {return total + (item.Precio*item.quantity)}, 0)
        
               
    }

  return (
    <Provider value={{cart,addToCart, removeFromCart, clearCart, isInCart, CartQuantity,CartPrice}}>
        {children}
    </Provider>
  )
}


export default useCartContext;
