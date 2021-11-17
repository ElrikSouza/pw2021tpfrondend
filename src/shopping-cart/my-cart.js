import React from "react";
import { useCart } from "./use-cart";

export const MyCartPage = () => {
  const { products, clearCart } = useCart();

  return (
    <ul>
      <button onClick={clearCart}>Esvaziar carrinho</button>
      {products.map((product) => (
        <div>
          x{product.quantity} {product.nome} por{" "}
          {product.preco * product.quantity}R$
        </div>
      ))}
    </ul>
  );
};
