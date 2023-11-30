import React from 'react';
import { Paper } from '@mui/material';

function Dashboard({products,setProducts}){
   return(
      
      <div className="spotlight-listings-container">
      <p></p>
     <div className="game-card-listings">
      
     {products.map((product, idx) => (
            <div className="product" key={idx}>
             <div className="game-card"> 
            <div className="game-content">
            <Paper elevation={7} className="game-details">
                    <p>Id:{product.id}</p>
                    <p>Title : {product.title}</p>
                    <p>Price : {product.price}</p>
                    <p>Description: {product.description}</p>
                    <p>Category : {product.category}</p>
                    <p>Image :{product.image}</p>
                    <p>DateOFSale:{product.dateOfSale}</p>
                    </Paper>
                  </div>
                  </div> 
                  </div> 
                  
     ))}
     </div>
     </div>
        
    )
}
export default Dashboard