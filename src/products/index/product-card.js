import React from "react";
import { Link } from "react-router-dom";
import { ProductImage } from "../product-img/product-image";
import "./product-card.css";

export const ProductCard = ({ product }) => (
  <div className="product-card">
    <ProductImage imgId={product.img_filename} className="product-card_img" />
    <div className="product-card_nome">{product.nome}</div>
    <div className="product-card_preco">{product.preco} R$</div>
    <Link to={`/products/${product.id}`} className="product-card_link">
      Ver mais
    </Link>
  </div>
);
