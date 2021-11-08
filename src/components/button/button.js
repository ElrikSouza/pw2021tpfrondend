import React from "react";

export const AppButton = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
);
