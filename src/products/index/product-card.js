import React from "react";
import { AppButtonLink } from "../../components/button/button";
import { ProductImage } from "../product-img/product-image";
import "./product-card.css";

export const ProductCard = ({ product }) => (
  <div className="product-card">
    <ProductImage imgId={product.img_filename} className="product-card_img" />
    <div className="product-card_nome">{product.nome}</div>
    <div className="product-card_preco">{product.preco} R$</div>
    <AppButtonLink to={`/products/${product.id}`} className="product-card_link">
      Ver mais
    </AppButtonLink>
  </div>
);
