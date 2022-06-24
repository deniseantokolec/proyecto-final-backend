import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './pages/item-list-container';
import ItemDetailContainer from './pages/item-detail-containter';
import CartContainer from './pages/cartcontainer'
import Contacto from './pages/contacto'

function App() {
  return (
    <div className="div-app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryid' element={ <ItemListContainer /> } />
        <Route path='/item/:id' element = {<ItemDetailContainer />} />
        <Route path='/cart/' element = {<CartContainer />} />
        <Route path='/contacto/' element = {<Contacto />} />

      </Routes>

    </div>
  );
}

export default App;
