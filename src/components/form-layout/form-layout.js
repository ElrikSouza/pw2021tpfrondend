import React from "react";
import { classNameBuilder } from "../../helpers/classname-builder";
import "./form-layout.css";

const useLayoutClassname = classNameBuilder("form-layout", {
  wide: "form-layout--wide",
  normal: "form-layout--normal",
});

export const FormLayout = ({ children, size = "normal" }) => {
  const className = useLayoutClassname(size);
  return <div className={className}>{children}</div>;
};
