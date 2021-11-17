import { useEffect, useState } from "react";
import { store } from "../storage/storage";

export const useRole = () => {
  const [role, setRole] = useState("LOADING");

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
  }, []);

  return role;
};
