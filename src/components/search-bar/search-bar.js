import React from "react";
import { AppInput } from "../input/input";

export const SearchBar = ({ searchParam, onChange, clear, submit }) => (
  <div>
    <AppInput
      value={searchParam}
      onChange={onChange}
      placeholder="Pesquisar por nome"
      isValid={true}
    />
    <button onClick={clear}>X</button>
    <button onClick={submit}>Botar um icone aqui depois</button>
  </div>
);
