import styles from "./Filter.module.css";
import React, { useState } from "react";
import SelectComponent from "../../common/Select";
import Select from "react-select";
import { useProducts, useProductsAction } from "../Provider/Provider";
import SearchBar from "../SearchBar/SearchBar";
const filterOptions = [
  { value: "", label: "All" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductsAction();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const filterChange = (selectItem) => {
    setFilter(selectItem);
    dispatch({ type: "filter", selectItem });
    dispatch({ type: "sort", selectItem: sort });
    console.log(selectItem);
  };
  const sortHandler = (selectItem) => {
    setSort(selectItem);
    dispatch({ type: "sort", selectItem });
  };
  return (
    <div className={styles.container}>
      <div className={styles.select}>
        <div>
        <SearchBar filter={filter} />
        </div>
       {/* <label className={styles.label}></label> */}
       <div className={styles.selects}>
       <div>
          <SelectComponent
          title="filter by Size:"
            value={filter}
            onChange={filterChange}
            options={filterOptions}
          />
        </div>
      
        <div>
          {/* <label className={styles.label}>Sort by Price:</label> */}
          <SelectComponent
           title="Sort by Price:"
          value={sort} 
          onChange={sortHandler} 
          options={sortOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
