import { useCallback, useState } from "react";
import { useDialog } from "../../hooks/use-dialog";
import { TOAST_STATES } from "./toast";

export const useToast = (intialState = false) => {
  const {
    setIsVisible: setIsToastVisible,
    isVisible: isToastVisible,
    handleClose: handleToastClose,
  } = useDialog(intialState);
  const [toastState, setToastState] = useState(TOAST_STATES.INFO);
  const [toastMsg, setToastMsg] = useState("");

  const openToast = useCallback(
    (msg, state) => {
      setToastMsg(msg);
      setToastState(state);
      setIsToastVisible(true);
    },
    [setToastState, setToastMsg, setIsToastVisible]
  );

  return {
    toastState,
    toastMsg,
    openToast,
    isToastVisible,
    handleToastClose,
  };
};
