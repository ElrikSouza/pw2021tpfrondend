import React from "react";
import { classNameBuilder } from "../../helpers/classname-builder";
import { GoAlert, GoInfo, GoX } from "react-icons/go";
import "./toast.css";
import { AppButton } from "../button/button";

export const TOAST_STATES = {
  INFO: Symbol("info"),
  ERROR: Symbol("error"),
};

const useToastClassname = classNameBuilder(
  "toast",
  { [TOAST_STATES.INFO]: "toast--info", [TOAST_STATES.ERROR]: "toast--error" },
  { isVisible: "toast--visible" }
);

const ToastIcon = ({ state }) => (
  <>
    {state === TOAST_STATES.ERROR && <GoAlert />}
    {state === TOAST_STATES.INFO && <GoInfo />}
  </>
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
      <ToastIcon state={state} />
      {msg}
      <AppButton theme="transparent" onClick={handleClose}>
        <GoX />
      </AppButton>
    </div>
  );
};
