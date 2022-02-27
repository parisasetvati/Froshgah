import React, { useState } from "react";
import Product from "../Product/Product";
const ProductList = ({ onCrement,ondecrement,onDelete ,products}) => {
 
  
  return (
    <div>
    
      {products.map((p) => {
        return (
          <Product
          
          products={p}
            onCrement={()=>{onCrement(p.id)}}
            ondecrement={()=>ondecrement(p.id)}
            onDelete={()=>onDelete(p.id)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
