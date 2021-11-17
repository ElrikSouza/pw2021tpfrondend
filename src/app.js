import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignInPage } from "./auth/signin/signin";
import { CreateProductPage } from "./products/create/create-product";
import { ProductsIndexPage } from "./products/index/index-products";
import { ShowProductPage } from "./products/show/show-product";
import { SignUpUserPage } from "./auth/signup/signup-user";
import { NavBar } from "./components/navbar/navbar";
import { AdmPage } from "./adm-page/adm-page";
import { AboutPage } from "./about/about";
import { MyCartPage } from "./shopping-cart/my-cart";
import { AddressForm } from "./address/address";
import { MustLoginPage } from "./errror-pages/must-login";
import { FinishOrderPage } from "./order/finish-order/finish-order";

export const App = () => (
  <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpUserPage />} />
        <Route path="/products/create" element={<CreateProductPage />} />
        <Route path="/products/:id" element={<ShowProductPage />} />
        <Route path="/adm" element={<AdmPage />} />
        <Route path="/cart" element={<MyCartPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/guest-forbidden" element={<MustLoginPage />} />
        <Route path="/finish-order" element={<FinishOrderPage />} />
        <Route path="/" element={<ProductsIndexPage />} />
      </Routes>
    </Router>
  </div>
);
