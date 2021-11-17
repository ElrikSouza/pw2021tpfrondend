import { useEffect, useState } from "react";
import { ShoppingCart } from "./shopping-cart";

export const useCartProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const cart = await ShoppingCart.getShopppingCart();
      setProducts(cart);
    };

    getProducts();
  }, []);

  return { products, setProducts };
};
