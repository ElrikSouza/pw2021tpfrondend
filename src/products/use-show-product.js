import axios from "axios";
import { useEffect, useState } from "react";
import { buildUrl } from "../helpers/build-url";

export const useShowProduct = (productId) => {
  const [product, setProduct] = useState({
    nome: "Carregando...",
    preco: 0.0,
    estoque: -1,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios.get(buildUrl(`products/${productId}`));
      setProduct(result.data.product);
    };

    fetchProduct();
  }, [productId]);

  return { product };
};
