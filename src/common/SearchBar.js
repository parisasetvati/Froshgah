import styles from "./SearchBar.module.css";
import { useProductsAction } from "../Components/Provider/Provider";
import { useState } from "react";
const SearchBar = ({ filter }) => {
  const dispatch = useProductsAction();
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    dispatch({ type: "filter", selectItem: filter });
    dispatch({ type: "search", event: e });
    setSearch(e.target.value);
  };
  return (
    <div className={styles.search}>
      <label className={styles.label}>search:</label>
      <input type="text" onChange={searchHandler} value={search}></input>
    </div>
  );
};

export default SearchBar;
