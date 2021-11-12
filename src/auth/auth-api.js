import axios from "axios";
import { buildUrl } from "../helpers/build-url";
import { store } from "../storage/storage";

export const callSignIn = async ({ email, senha }) => {
  const result = await axios.post(buildUrl("signin"), {
    email,
    senha,
  });

  const { token, role } = result.data;

  await store.setItem("token", token);
  await store.setItem("role", role);
};
