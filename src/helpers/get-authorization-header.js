import { store } from "../storage/storage";

export const getAuthorizationHeader = async () => {
  const token = await store.getItem("token");
  const header = `Bearer ${token}`;

  return { headers: { authorization: header } };
};
