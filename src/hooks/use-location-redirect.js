import { useLocation } from "react-router";

export const useLocationRedirect = () => {
  const { state } = useLocation();

  if (state && state.redirect) {
    return state.redirect;
  }

  return "/";
};
