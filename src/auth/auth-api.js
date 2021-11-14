import axios from "axios";
import { wrapApiCallWithErrorHandling } from "../helpers/api-error/error-handling-wrapper";
import { buildUrl } from "../helpers/build-url";
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
