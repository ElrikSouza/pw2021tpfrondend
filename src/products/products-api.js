import axios from "axios";
import { buildUrl } from "../helpers/build-url";
import { getAuthorizationHeader } from "../helpers/get-authorization-header";

export const callCreateProduct = async (product) => {
  const authoriaztionHeader = await getAuthorizationHeader();

  await axios.post(buildUrl("products"), product, authoriaztionHeader);
};

const buildProductsUrl = (page, productName) => {
  const url = buildUrl(`products?page=${page}`);

  if (productName != null) {
    return url + `&nome=${productName}`;
  }

  return url;
};

export const callGetProducts = async (productName = "", page = 1) => {
  const result = await axios.get(buildProductsUrl(page, productName));
  const { products, count } = result.data;

  return { products, count };
};
