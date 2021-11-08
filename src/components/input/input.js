import React from "react";
import { classNameBuilder } from "../../helpers/classname-builder";
import "./input.css";

const useInputClassname = classNameBuilder(
  "app-input",
  { primary: "app-input--primary", secondary: "app-input--secondary" },
  { isValid: ["app-input--valid", "app-input--invalid"] }
);

export const AppInput = ({
  onChange,
  value,
  theme = "primary",
  errors,
  isValid,
  ...props
}) => {
  const className = useInputClassname(theme, { isValid });

  return (
    <div>
      {!isValid && <div>{errors}</div>}
      <input
        value={value}
        onChange={onChange}
        className={className}
        {...props}
      />
    </div>
  );
};
