import React from "react";
import { Link } from "react-router-dom";

export const MustLoginPage = () => (
  <div>
    <Link to="/signin">Log in</Link>
    <Link to="/signup">Sign up</Link>
  </div>
);
