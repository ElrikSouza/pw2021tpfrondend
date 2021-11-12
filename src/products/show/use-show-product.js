import { useEffect, useState } from "react";
import { callGetProducts } from "../products-api";

export const useShowProduct = (productId) => {
  const [product, setProduct] = useState({
    nome: "Carregando...",
    preco: 0.0,
    estoque: -1,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await callGetProducts(productId);
      setProduct(product);
    };

    fetchProduct();
  }, [productId]);

  return { product };
};
