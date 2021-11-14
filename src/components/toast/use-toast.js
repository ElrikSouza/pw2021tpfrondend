import { useCallback, useState } from "react";
import { useDialog } from "../../hooks/use-dialog";
import { TOAST_STATES } from "./toast";

export const useToast = (intialState = false) => {
  const { setIsVisible, ...rest } = useDialog(intialState);
  const [toastState, setToastState] = useState(TOAST_STATES.INFO);
  const [msg, setMsg] = useState("");

  const openToast = useCallback(
    (msg, state) => {
      setMsg(msg);
      setToastState(state);
      setIsVisible(true);
    },
    [setToastState, setMsg, setIsVisible]
  );

  return {
    ...rest,
    toastState,
    msg,
    openToast,
  };
};
