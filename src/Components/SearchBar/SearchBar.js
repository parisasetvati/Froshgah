import styles from './SearchBar.module.css';
import { useProducts, useProductsAction } from "../Provider/Provider";
import { useState } from 'react';
const SearchBar = ({filter}) => {
    const dispatch = useProductsAction();
    const [search, setSearch] = useState("");
    const searchHandler = (e) => {
        setSearch(e.target.value);
        dispatch({ type: "filter", selectItem: filter });
        dispatch({ type: "search", event: e });
      };
    return (  
        <div className={styles.search}>
            <label className={styles.label}>search:</label>
            <input type="text" onChange={searchHandler}></input>
          </div> 
    );
}
 
export default SearchBar;