import { useNavigate } from "react-router";

export const useRedirectCallback = (toPath) => {
  const nav = useNavigate();

  const redirect = () => nav(toPath);

  return redirect;
};
