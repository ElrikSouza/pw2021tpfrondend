import axios from "axios";
import { wrapApiCallWithErrorHandling } from "../helpers/api-error/error-handling-wrapper";
import { buildUrl } from "../helpers/build-url";
import { getAuthorizationHeader } from "../helpers/get-authorization-header";

const toFormData = (obj) => {
  const keys = Object.keys(obj);
  const formData = new FormData();

  for (const key of keys) {
    formData.append(key, obj[key]);
  }

  return formData;
};

export const callCreateProduct = wrapApiCallWithErrorHandling(
  async (product) => {
    const headers = await getAuthorizationHeader();
    headers.headers["Content-Type"] = "multipart/form-data";

    await axios.post(buildUrl("products"), toFormData(product), headers);
  }
);

export const callUpdateProduct = wrapApiCallWithErrorHandling(
  async (productId, changes) => {
    const headers = await getAuthorizationHeader();
    headers.headers["Content-Type"] = "multipart/form-data";

    await axios.put(
      buildUrl(`products/${productId}`),
      toFormData(changes),
      headers
    );
  }
);

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

export const callGetOneProduct = async (productId) => {
  const result = await axios.get(buildUrl(`products/${productId}`));
  return result.data.product;
};
