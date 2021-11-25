import React from "react";
import { AppButton } from "../components/button/button";
import { ShoppingCartRow } from "../products/shopping-cart-row";
import { useCart } from "./use-cart";

export const MyCartPage = () => {
  const { products, clearCart } = useCart();

  return (
    <ul>
      <AppButton onClick={clearCart}>Esvaziar carrinho</AppButton>
      {products.map((product) => (
        <ShoppingCartRow product={product} />
      ))}
    </ul>
  );
};
