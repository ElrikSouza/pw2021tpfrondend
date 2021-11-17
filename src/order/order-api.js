import axios from "axios";
import { wrapApiCallWithErrorHandling } from "../helpers/api-error/error-handling-wrapper";
import { buildUrl } from "../helpers/build-url";
import { getAuthorizationHeader } from "../helpers/get-authorization-header";

export const callCreateOrder = wrapApiCallWithErrorHandling(
  async (products, addressId) => {
    const headers = await getAuthorizationHeader();
    await axios.post(buildUrl("orders"), { products, addressId }, headers);
  }
);
