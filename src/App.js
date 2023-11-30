import './App.css';
import React, { useState, useEffect } from 'react';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [products,setProducts] = useState([]);
   useEffect(()=>{
      async function getProducts(){
        let response=await fetch('https://mern-two-ruby.vercel.app/products/all',
        {
          method:"GET",
        }
        )
        const data=await response.json()
        if(data){
          setProducts(data)
        }
        }
      getProducts()
    },[])
  return (
    <div className="App">
       <Routes>
        
        <Route exact path="/"
          element={<Dashboard
          products={products}
          setProducts={setProducts}
          />} />
          </Routes>
    </div>
  );
}

export default App;
