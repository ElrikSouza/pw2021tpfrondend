import { ShoppingCart } from "./shopping-cart";
import { useCartProducts } from "./use-cart-products";

export const useCart = () => {
  const { products, setProducts } = useCartProducts();

  const removeItem = (productId) => async () => {
    const cart = await ShoppingCart.removeProduct(productId);
    setProducts(cart);
  };

  const clearCart = async () => {
    await ShoppingCart.clearCart();
    setProducts([]);
  };

  return { products, removeItem, clearCart };
};
