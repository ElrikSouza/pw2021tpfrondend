import React from "react";
import "./product-image.css";

export const ProductImage = ({ imgId, className = "" }) => {
  const url = process.env.REACT_APP_IMGSERVER_PREFIX + imgId;

  return (
    <img
      alt="O produto nao possui uma imagem"
      className={"product-image " + className}
      src={url}
    />
  );
};
