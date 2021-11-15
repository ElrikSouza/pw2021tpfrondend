import React from "react";
import { Link } from "react-router-dom";
import { ProductImage } from "../product-img/product-image";

export const ProductCard = ({ product }) => (
  <div>
    <div>{product.nome}</div>
    <div>{product.preco}</div>
    <ProductImage imgId={product.img_filename} />
    <Link to={`/products/${product.id}`}>Ver mais</Link>
  </div>
);
