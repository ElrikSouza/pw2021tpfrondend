import { useEffect, useState } from "react";
import { ShoppingCart } from "../shopping-cart/shopping-cart";

export const useAddToCart = (productId) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      const product = await ShoppingCart.getProductFromCart(productId);
      console.log(productId, product);

      if (product == null) {
        setQuantity(0);
      } else {
        setQuantity(product.quantity);
      }
    };

    getProduct();
  }, [productId]);

  return { quantity };
};
