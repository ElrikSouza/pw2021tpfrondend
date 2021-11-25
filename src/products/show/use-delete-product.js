import { useNavigate } from "react-router";
import { callDeleteProduct } from "../products-api";

export const useDeleteProduct = (productId) => {
  const navigate = useNavigate();

  const deleteProduct = async () => {
    await callDeleteProduct(productId);
    navigate("/");
  };

  return deleteProduct;
};
