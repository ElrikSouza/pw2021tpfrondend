import React from "react";
import { Link } from "react-router-dom";
import { classNameBuilder } from "../../helpers/classname-builder";
import "./button.css";

const useButtonClassname = classNameBuilder("app-button", {
  primary: "app-button--primary",
  transparent: "app-button--transparent",
});

export const AppButton = ({
  children,
  theme = "primary",
  className = "",
  ...props
}) => {
  const finalClassname = useButtonClassname(theme, {}, className);
  return (
    <button type="button" className={finalClassname} {...props}>
      {children}
    </button>
  );
};

export const AppButtonLink = ({
  children,
  theme = "primary",
  className = "",
  to,
  ...props
}) => {
  const finalClassname = useButtonClassname(theme, {}, className);
  return (
    <Link to={to} className={finalClassname} {...props}>
      {children}
    </Link>
  );
};
