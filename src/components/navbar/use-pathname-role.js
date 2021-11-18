import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { store } from "../../storage/storage";

export const usePathnameSensitiveRole = () => {
  const [role, setRole] = useState("LOADING");
  const { pathname } = useLocation();

  useEffect(() => {
    const getRole = async () => {
      const result = await store.getItem("role");
      if (result) {
        setRole(result);
      } else {
        setRole("GUEST");
      }
    };
    getRole();
  }, [pathname]);

  return role;
};
