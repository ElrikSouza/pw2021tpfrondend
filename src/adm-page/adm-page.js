import { AppButtonLink } from "../components/button/button";
import { FormLayout } from "../components/form-layout/form-layout";

export const AdmPage = () => (
  <FormLayout>
    <AppButtonLink to="/products/create">Criar um produto</AppButtonLink>
    <AppButtonLink to="/collaborators/create">
      Cadastrar um novo colaborador
    </AppButtonLink>
  </FormLayout>
);
