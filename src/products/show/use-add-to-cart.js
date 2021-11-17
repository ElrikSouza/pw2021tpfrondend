import { useCallback, useEffect, useState } from "react";
import { ShoppingCart } from "../../shopping-cart/shopping-cart";

export const useAddToCart = (productId) => {
  const [quantity, setQuantity] = useState(0);

  const fetchQuantity = useCallback(async () => {
    const product = await ShoppingCart.getProductFromCart(productId);

    if (product == null) {
      setQuantity(0);
    } else {
      setQuantity(product.quantity);
    }
  }, [productId]);

  useEffect(() => {
    fetchQuantity();
  }, [fetchQuantity]);

  const addToCart = async (product, value) => {
    await ShoppingCart.addProduct(product, value);
    await fetchQuantity();
  };

  return { quantity, addToCart };
};
