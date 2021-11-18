import React from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/use-logout";
import { ConditionalRender } from "../conditional-render/conditional-render";
import { usePathnameSensitiveRole } from "./use-pathname-role";
import "./navbar.css";

export const NavBar = () => {
  const role = usePathnameSensitiveRole();
  const logout = useLogout();
  const activeClassname = ({ isActive }) =>
    isActive ? "navbar-link--active" : "";

  return (
    <nav className="navbar">
      <NavLink to="/" className={activeClassname}>
        Inicio
      </NavLink>
      <ConditionalRender condition={role === "ADM"}>
        <NavLink to="/adm" className={activeClassname}>
          Area do administrador
        </NavLink>
      </ConditionalRender>

      <ConditionalRender condition={role === "GUEST"}>
        <NavLink to="/signin" className={activeClassname}>
          Log In
        </NavLink>
        <NavLink to="/signup" className={activeClassname}>
          Sign Up
        </NavLink>
      </ConditionalRender>

      <NavLink to="/sobre" className={activeClassname}>
        Sobre
      </NavLink>

      <NavLink to="/cart" className={activeClassname}>
        Meu Carrinho
      </NavLink>

      <ConditionalRender condition={role === "ADM" || role === "USER"}>
        <button onClick={logout} className="navbar-link-btn">
          Log out
        </button>
      </ConditionalRender>
    </nav>
  );
};
