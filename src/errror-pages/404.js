import React from "react";
import { AppButtonLink } from "../components/button/button";
import { FormLayout } from "../components/form-layout/form-layout";

export const NotFoundPage = () => (
  <FormLayout>
    <h1>Essa página não existe</h1>
    <AppButtonLink to="/">Voltar para o ínicio</AppButtonLink>
  </FormLayout>
);
