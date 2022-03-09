import React from "react";
import Select from "react-select";
const SelectComponent = ({title,value,onChange,options}) => {
    return ( 
        <>
        <p>{title}</p>
        <Select
        
            value={value}
            onChange={onChange}
            options={options}
          />
      </>
     );
}
 
export default SelectComponent;