import { useState } from "react";

export const useFileUpload = () => {
  const [file, setFile] = useState();

  const onChange = ({ target }) => {
    setFile(target.files[0]);
  };

  return { file, onChange };
};
