import { useEffect, useState } from "react";
import { callGetOneProduct } from "../products-api";

export const useShowProduct = (productId) => {
  const [product, setProduct] = useState({
    nome: "Carregando...",
    preco: 0.0,
    estoque: -1,
    id: -1,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await callGetOneProduct(productId);
      setProduct(product);
    };

    fetchProduct();
  }, [productId]);

  return { product, setProduct };
};
