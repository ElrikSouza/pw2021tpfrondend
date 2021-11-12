import axios from "axios";
import { useSignUpForm } from "./use-signup-form";
import { getApiPrefix } from "../../helpers/api-prefix";
import { getAuthorizationHeader } from "../../helpers/get-authorization-header";

export const useSignUpCollab = () => {
  const form = useSignUpForm();

  const submit = async () => {
    const authorizationHeader = await getAuthorizationHeader();

    await axios.post(
      getApiPrefix() + "collaborators",
      {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      },
      authorizationHeader
    );
  };

  return {
    ...form,
    submit,
  };
};
