import React from "react";
import "./image-upload.css";

export const ImageUpload = ({ image, onChange }) => {
  const url = image instanceof Blob ? URL.createObjectURL(image) : "";
  return (
    <div>
      {image !== "" && (
        <img
          src={url}
          alt="Nenhum arquivo selecionado"
          className="image-upload_preview"
        />
      )}
      <input type="file" placeholder="Escolher arquivo" onChange={onChange} />
    </div>
  );
};
