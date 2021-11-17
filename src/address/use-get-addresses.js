import { useEffect, useState } from "react";
import { callGetAddresses } from "./address-api";

export const useGetAddresses = (isAuthenticated = true) => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const fetchAddresses = async () => {
      const result = await callGetAddresses();
      setAddresses(result.addresses);
    };
    fetchAddresses();
  }, [isAuthenticated]);

  return { addresses };
};
