import React from "react";
import { useRole } from "../../hooks/use-role";
import { ConditionalRender } from "./conditional-render";

export const VisibleToCollaborators = ({ children }) => {
  const role = useRole();

  return (
    <ConditionalRender condition={role === "ADM"}>{children}</ConditionalRender>
  );
};
