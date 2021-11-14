import React from "react";
import { NavLink } from "react-router-dom";
import { useRole } from "../../hooks/use-role";
import { ConditionalRender } from "../conditional-render/conditional-render";

export const NavBar = () => {
  const role = useRole();

  return (
    <nav>
      <ConditionalRender condition={role === "ADM"}>
        <NavLink to="/adm">Area do administrador</NavLink>
      </ConditionalRender>

      <ConditionalRender condition={role === "GUEST"}>
        <NavLink to="/signin">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </ConditionalRender>

      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/cart">Meu Carrinho</NavLink>

      <ConditionalRender condition={role === "ADM" || role === "USER"}>
        <NavLink to="/logout">Log out</NavLink>
      </ConditionalRender>
    </nav>
  );
};
