import React from "react";
import { ProductImage } from "./product-img/product-image";
import "./shopping-cart-row.css";

export const ShoppingCartRow = ({ product }) => (
  <div className="shopping-cart-row">
    <ProductImage
      imgId={product.img_filename}
      className="shopping-cart-row_img"
    />
    <div className="shopping-cart-row_name">{product.nome}</div>
    <div className="shopping-cart-row_quantity">
      Quantidade: x{product.quantity}
    </div>
    <div className="shopping-cart-row_preco">
      <div>Preço: {product.preco}R$</div>
      <div>(Total: {product.preco * product.quantity}R$)</div>
    </div>
  </div>
);
