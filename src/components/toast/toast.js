import React from "react";
import { classNameBuilder } from "../../helpers/classname-builder";
import "./toast.css";

export const TOAST_STATES = {
  INFO: Symbol("info"),
  ERROR: Symbol("info"),
};

const useToastClassname = classNameBuilder(
  "toast",
  { [TOAST_STATES.INFO]: "toast--info", [TOAST_STATES.ERROR]: "toast--error" },
  { isVisible: "toast--visible" }
);

export const Toast = ({
  msg,
  isVisible,
  state = TOAST_STATES.INFO,
  handleClose,
}) => {
  const classname = useToastClassname(state, { isVisible });

  return (
    <div className={classname}>
      {msg}
      <button onClick={handleClose}>X</button>
    </div>
  );
};
