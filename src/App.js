import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/Navbar/Navbar";
function App({props}) {
  const [productList, setProductList] = useState([
    {
      name: "React",
      price: 399,
      id: 1,
      quantity: 1,
    },
    {
      name: "js",
      price: 129,
      id: 2,
      quantity: 3,
    },
    {
      name: "Html",
      price: 169,
      id: 3,
      quantity: 5,
    },
    {
      name: "css",
      price: 99,
      id: 4,
      quantity: 2,
    },
  ]);
  const crementHandler = (id) => {
    const index = productList.findIndex((p) => p.id === id);
    const product = { ...productList[index] };
    product.quantity++;
    const products = [...productList];
    products[index] = product;
    setProductList(products);
    console.log(product);
  };
  const decrementHandler = (id) => {
    const index = productList.findIndex((p) => p.id === id);
    const product = { ...productList[index] };
    if (product.quantity === 1) {
      const filterProducts = productList.filter((p) => p.id !== id);
      setProductList(filterProducts);
    } else {
      product.quantity--;
      const products = [...productList];
      products[index] = product;
      setProductList(products);
    }
  };
  const deleteHandler = (id) => {
    const filterProducts = productList.filter((p) => p.id !== id);
    setProductList(filterProducts);
  };
  return (
    <div className="App">
      <Navbar  totalItems={productList.filter((p)=>(p.quantity>1)).length}/>
      <ProductList 
      products={productList}
      onCrement={crementHandler}
      ondecrement={decrementHandler}
      onDelete={deleteHandler} />
    </div>
  );
}

export default App;
