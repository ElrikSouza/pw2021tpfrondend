import React from "react";

export const ImageUpload = ({ image, onChange }) => {
  const url = image instanceof Blob ? URL.createObjectURL(image) : "";
  return (
    <div>
      {image !== "" && <img src={url} alt="Nenhum arquivo selecionado" />}
      <input type="file" placeholder="Escolher arquivo" onChange={onChange} />
    </div>
  );
};
