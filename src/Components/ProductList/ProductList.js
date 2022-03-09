import React, { useState } from "react";
import Product from "../Product/Product";
import { ProductData } from "../db/ProductData";
import { useProducts, useProductsAction } from "../Provider/Provider";
import styles from "./ProductList.module.css";
import Select from "react-select";

import Provider from "../Provider/Provider";
import { useContext } from "react";

const ProductList = () => {
 
  
  const products = useProducts();

  const dispatch = useProductsAction();
 
  return (
    <div>
      
      {products.map((p) => {
        return (
          <Product
            products={p}
            onCrement={() => dispatch({ type: "crement", id: p.id })}
            ondecrement={() => dispatch({ type: "decrement", id: p.id })}
            onDelete={() => dispatch({ type: "delete", id: p.id })}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
