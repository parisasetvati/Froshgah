import styles from "./Product.module.css";
import React, { FaRegTrashAlt } from "react-icons/fa";



import ProductList from "../ProductList/ProductList";
import { useContext } from "react";
import {productContext ,ProductContextDispatcher}  from '../Provider/Provider'

const Product = ({ products, onCrement, ondecrement, onDelete }) => {
  return (
    
      
    <div className={styles.container}>
     

      <div className={styles.product}>
        <p>ProuctName:{products.title}</p>
        <p>Price:{products.price}</p>
        <p>
          Quantity:
          <span>{products.quantity}</span>
        </p>
        
      </div>
      <div className={styles.btncontainer}>
        <button className={styles.btn} onClick={onCrement}>
          +
        </button>
        <button
          className={`${styles.btn}  ${
            products.quantity > 1 ? styles.decrement : styles.delete
          }`}
          onClick={ondecrement}
        >
          {products.quantity > 1 ? "-" : <FaRegTrashAlt />}
        </button>
        <button className={styles.btn} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
    
  );
};

export default Product;
