import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateProductPage } from "./products/create/create-product";
import { ProductsIndexPage } from "./products/index-products";
import { ShowProductPage } from "./products/show-product";
import { SignInPage } from "./signin/signin";
import { SignUpUserPage } from "./signup/signup-user";

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
