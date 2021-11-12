import { getApiPrefix } from "./api-prefix";

export const buildUrl = (url) => `${getApiPrefix()}${url}`;
