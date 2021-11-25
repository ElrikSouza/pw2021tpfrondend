import React, { useEffect } from "react";
import "./select.css";

export const SelectInput = ({ options, value, setValue, onChange }) => {
  const optionTags = options.map((optionVal) => (
    <option value={optionVal.id} key={optionVal.id}>
      CEP: {optionVal.cep}
    </option>
  ));

  let defaultValue = "";

  if (options.length) {
    defaultValue = options[0].id + "";
  }

  useEffect(() => {
    setValue(defaultValue);
  }, [setValue, defaultValue]);

  return (
    <select className="select-box" value={value} onChange={onChange}>
      {optionTags}
    </select>
  );
};
