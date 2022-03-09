import "./App.css";

import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/Navbar/Navbar";
import { useProducts, useProductsAction } from "./Components/Provider/Provider";
import Provider from "./Components/Provider/Provider";
import Filter from '../src/Components/Filter/Filter'
import { useContext } from "react";

function App() {
 
  return (
    <>
    <Provider>
      <div className="App">
        <Navbar />
        <Filter/>
        <ProductList />
      </div>
    </Provider>
    </>
  );
}

export default App;
