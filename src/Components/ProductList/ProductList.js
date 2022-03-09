import React, { useState } from "react";
import Product from "../Product/Product";
import { useProducts, useProductsAction } from "../Provider/Provider";
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
