import axios from "axios";
import { ApiError } from "../helpers/api-error/api-error";
import { wrapApiCallWithErrorHandling } from "../helpers/api-error/error-handling-wrapper";
import { buildUrl } from "../helpers/build-url";
import { getAuthorizationHeader } from "../helpers/get-authorization-header";

export const callGetAddressFromCep = async (cep) => {
  try {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return result.data;
  } catch (error) {
    throw new ApiError(
      "Nao foi possivel buscar o endereco pelo cep, por favor preencha o formulario manualmente"
    );
  }
};

export const callRegisterAddress = wrapApiCallWithErrorHandling(
  async (addressForm) => {
    const authHeader = await getAuthorizationHeader();
    await axios.post(buildUrl("addresses"), addressForm, authHeader);
  }
);

export const callGetAddresses = wrapApiCallWithErrorHandling(async () => {
  const authHeader = await getAuthorizationHeader();
  const result = await axios.get(buildUrl("addresses"), authHeader);
  return result.data;
});
