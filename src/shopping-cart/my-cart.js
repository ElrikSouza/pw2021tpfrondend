import React from "react";
import { AppButton, AppButtonLink } from "../components/button/button";
import { FormLayout } from "../components/form-layout/form-layout";
import { ShoppingCartRow } from "../products/shopping-cart-row";
import { useCart } from "./use-cart";

export const MyCartPage = () => {
  const { products, clearCart } = useCart();

  return (
    <FormLayout size="wide">
      <AppButton onClick={clearCart}>Esvaziar carrinho</AppButton>
      {products.map((product) => (
        <ShoppingCartRow product={product} key={product.id} />
      ))}
      <AppButtonLink to="/finish-order">Finalizar compra</AppButtonLink>
    </FormLayout>
  );
};
