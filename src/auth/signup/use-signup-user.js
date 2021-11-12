import axios from "axios";
import { getApiPrefix } from "../../helpers/api-prefix";
import { useSignUpForm } from "./use-signup-form";

export const useSignUpUser = () => {
  const form = useSignUpForm();

  const submit = async () => {
    await axios.post(getApiPrefix() + "users", {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
    });
  };

  return {
    ...form,
    submit,
  };
};
