import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { callGetOneProduct } from "../products-api";

export const useShowProduct = (productId) => {
  const [product, setProduct] = useState({
    nome: "Carregando...",
    preco: 0.0,
    estoque: -1,
    id: -1,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await callGetOneProduct(productId);
        setProduct(product);
      } catch (error) {
        if (error.status && error.status === 404) {
          navigate("/404");
          return;
        }

        throw error;
      }
    };

    fetchProduct();
  }, [productId, navigate]);

  return { product, setProduct };
};
