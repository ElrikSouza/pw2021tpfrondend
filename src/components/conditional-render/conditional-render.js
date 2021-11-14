import React from "react";

export const ConditionalRender = ({ condition, children }) => (
  <>{condition ? children : <></>}</>
);
