import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignInPage } from "./signin/signin";
import { SignUpUserPage } from "./signup/signup-user";

export const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpUserPage />} />
      </Routes>
    </Router>
  </div>
);
