import React, { useContext, useReducer} from "react";
import { ProductData } from "../db/ProductData";
 const productContext = React.createContext();
 const ProductContextDispatcher = React.createContext();
 
 const reducer=(state,action)=>{
     switch (action.type){
         case "crement":{
            const index = state.findIndex((p) => p.id ===action.id);
            const product = { ...state[index] };
            product.quantity++;
            const updateProducts = [...state];
            updateProducts[index] = product;
            return(updateProducts) 
               
         }
     case "decrement":{
        const index = state.findIndex((p) => p.id === action.id);
        const product = { ...state[index] };
        if (product.quantity === 1) {
          const filterProducts = state.filter((p) => p.id !== action.id);
          return filterProducts;
        } else {
          product.quantity--;
          const updateProducts = [...state];
          updateProducts[index] = product;
          return updateProducts;
        }
    }
        case "delete":{
        const filterProducts = state.filter((p) => p.id !==action.id);
        return (filterProducts);
     }
    }
 }
const Provider = ({children}) => {
 const[products,dispatch]=useReducer(reducer,ProductData)
    
  return (
    <productContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}> 
{children}
      </ProductContextDispatcher.Provider>
    </productContext.Provider>
  );
};

export default Provider;
export const useProducts=()=>useContext(productContext)
export const useProductsAction=()=>{
return useContext(ProductContextDispatcher)}