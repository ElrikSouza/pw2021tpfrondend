import { useEffect, useState } from "react";
import { callGetAddresses } from "./address-api";

export const useGetAddresses = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const result = await callGetAddresses();
      setAddresses(result.addresses);
    };
    fetchAddresses();
  }, []);

  return { addresses };
};
