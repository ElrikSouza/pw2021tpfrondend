import axios from "axios";
import { wrapApiCallWithErrorHandling } from "../helpers/api-error/error-handling-wrapper";
import { buildUrl } from "../helpers/build-url";
import { getAuthorizationHeader } from "../helpers/get-authorization-header";
import { store } from "../storage/storage";

export const callSignIn = wrapApiCallWithErrorHandling(
  async ({ email, senha }) => {
    const result = await axios.post(buildUrl("signin"), {
      email,
      senha,
    });

    const { token, role } = result.data;

    await store.setItem("token", token);
    await store.setItem("role", role);
  }
);

export const callSignUpUser = wrapApiCallWithErrorHandling(async (form) =>
  axios.post(buildUrl("users"), {
    nome: form.nome,
    email: form.email,
    senha: form.senha,
  })
);

export const callSignUpCollaborator = wrapApiCallWithErrorHandling(
  async (form) => {
    const authorizationHeader = await getAuthorizationHeader();

    await axios.post(
      buildUrl("collaborators"),
      {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      },
      authorizationHeader
    );
  }
);
