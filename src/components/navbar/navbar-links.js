import { NavLink } from "react-router-dom";
import { ConditionalRender } from "../conditional-render/conditional-render";

export const NavBarLinks = ({ role, logOut }) => {
  const activeClassname = ({ isActive }) =>
    isActive ? "navbar-link--active" : "";

  return (
    <>
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
        <button onClick={logOut} className="navbar-link-btn">
          Log out
        </button>
      </ConditionalRender>
    </>
  );
};
