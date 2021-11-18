import { useNavigate } from "react-router";
import { store } from "../storage/storage";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await store.removeItem("token");
    await store.removeItem("role");
    navigate("/signin");
  };

  return logout;
};
