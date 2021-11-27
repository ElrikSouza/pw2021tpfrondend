import React from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/use-logout";
import { usePathnameSensitiveRole } from "./use-pathname-role";
import { NavbarDrawer } from "./navbar-drawer";
import { NavBarLinks } from "./navbar-links";
import "./navbar.css";
import { NavbarDrawer } from "./navbar-drawer";
import { NavBarLinks } from "./navbar-links";
import { useDialog } from "../../hooks/use-dialog";

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
      <NavbarDrawer>
        <NavBarLinks role={role} logOut={logout} />
      </NavbarDrawer>
    </nav>
  );
};
