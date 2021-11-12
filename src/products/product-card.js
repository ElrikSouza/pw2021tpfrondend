import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => (
  <div>
    <div>{product.nome}</div>
    <div>{product.preco}</div>
    <Link to={`/products/${product.id}`}>Ver mais</Link>
  </div>
);
