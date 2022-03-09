import React from "react";
import Select from "react-select";
import styles from "./Select.module.css";
const SelectComponent = ({ title, value, onChange, options }) => {
  return (
    <>
      <p>{title}</p>
      <div className={styles.select}>
        <Select value={value} onChange={onChange} options={options} />
      </div>
    </>
  );
};

export default SelectComponent;
