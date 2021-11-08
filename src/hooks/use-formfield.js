import { useState } from "react";

export const useFormField = (validator, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const [errors, setErrors] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const onChange = ({ target }) => {
    setValue(target.value);
    const errors = validator(target.value);
    setErrors(errors);
    setIsValid(errors.length === 0);
  };

  return { value, setValue, onChange, errors, isValid };
};
