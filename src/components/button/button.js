import React from "react";
import { classNameBuilder } from "../../helpers/classname-builder";
import "./button.css";

const useButtonClassname = classNameBuilder("app-button", {
  primary: "app-button--primary",
});

export const AppButton = ({ children, theme = "primary", ...props }) => {
  const className = useButtonClassname(theme);
  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
};
