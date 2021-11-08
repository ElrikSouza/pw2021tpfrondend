import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignInPage } from "./signin/signin";

export const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  </div>
);
