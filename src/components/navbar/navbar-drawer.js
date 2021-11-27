import React from "react";
import { GoGrabber, GoX } from "react-icons/go";
import { classNameBuilder } from "../../helpers/classname-builder";
import { useDialog } from "../../hooks/use-dialog";
import { useWidth } from "../../hooks/use-width";
import { AppButton } from "../button/button";
import { ConditionalRender } from "../conditional-render/conditional-render";

const useNavbarDrawerClassname = classNameBuilder(
  "navbar-drawer",
  {},
  { isOpen: "navbar-drawer--visible" }
);

const threshold = 600;

export const NavbarDrawer = ({ children }) => {
  const dialog = useDialog();
  const className = useNavbarDrawerClassname("", { isOpen: dialog.isVisible });
  const width = useWidth();
  const openDialog = () => dialog.setIsVisible(true);

  return (
    <>
      <ConditionalRender condition={width <= threshold}>
        <div className={className}>
          <AppButton onClick={dialog.handleClose}>
            <GoX />
          </AppButton>
          {children}
        </div>
        <AppButton
          theme="transparent"
          className="navbar-icon-btn"
          onClick={openDialog}
        >
          <GoGrabber />
        </AppButton>
      </ConditionalRender>
      <ConditionalRender condition={width > threshold}>
        {children}
      </ConditionalRender>
    </>
  );
};
