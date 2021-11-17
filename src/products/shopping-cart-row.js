import React from "react";
import { ProductImage } from "./product-img/product-image";

export const ShoppingCartRow = ({ product }) => (
  <div>
    <ProductImage imgId={product.img_filename} />
    <div>{product.nome}</div>
    <div>Quantidade: x{product.quantity}</div>
    <div>
      Preco: {product.preco}R$ (Total: {product.preco * product.quantity}R$)
    </div>
  </div>
);
