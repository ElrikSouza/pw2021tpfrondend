import { useCallback, useState } from "react";

export const useDialog = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const handleClose = useCallback(() => setIsVisible(false), [setIsVisible]);

  return {
    isVisible,
    handleClose,
    setIsVisible,
  };
};
