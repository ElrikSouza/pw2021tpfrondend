import React from "react";
import "./product-image.css";

export const ProductImage = ({ imgId }) => {
  const url = process.env.REACT_APP_IMGSERVER_PREFIX + imgId;

  return (
    <img
      alt="O produto nao possui uma imagem"
      className="product-image"
      src={url}
    />
  );
};
