import { useEffect, useState } from "react";
import { useLogout } from "../hooks/use-logout";
import { callGetAddresses } from "./address-api";

export const useGetAddresses = (isAuthenticated = true) => {
  const [addresses, setAddresses] = useState([]);
  const handleLogOut = useLogout();

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const fetchAddresses = async () => {
      try {
        const result = await callGetAddresses();
        setAddresses(result.addresses);
      } catch (error) {
        if (error.status && error.status === 401) {
          handleLogOut();
        }
      }
    };
    fetchAddresses();
  }, [isAuthenticated, handleLogOut]);

  return { addresses };
};
