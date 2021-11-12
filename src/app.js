import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignInPage } from "./auth/signin/signin";
import { CreateProductPage } from "./products/create/create-product";
import { ProductsIndexPage } from "./products/index/index-products";
import { ShowProductPage } from "./products/show/show-product";
import { SignUpUserPage } from "./auth/signup/signup-user";

export const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpUserPage />} />
        <Route path="/products/create" element={<CreateProductPage />} />
        <Route path="/products" element={<ProductsIndexPage />} />
        <Route path="/products/:id" element={<ShowProductPage />} />
      </Routes>
    </Router>
  </div>
);
