import React from "react";
import { AppInput } from "../input/input";
import { GoX, GoSearch } from "react-icons/go";
import { AppButton } from "../button/button";
import "./search-bar.css";

export const SearchBar = ({ searchParam, onChange, clear, submit }) => (
  <div className="search-bar">
    <AppButton
      onClick={clear}
      className="search-bar_clear"
      disabled={searchParam === ""}
    >
      <GoX />
    </AppButton>

    <AppInput
      value={searchParam}
      onChange={onChange}
      placeholder="Pesquisar por nome"
      isValid={true}
      className="search-bar_input"
    />

    <AppButton onClick={submit} className="search-bar_search">
      <GoSearch />
    </AppButton>
  </div>
);
