import { useCallback } from "react";
import { TOAST_STATES } from "../components/toast/toast";
import { useToast } from "../components/toast/use-toast";
import { useFormField } from "../hooks/use-formfield";
import { useRedirectCallback } from "../hooks/use-redirect";
import {
  positiveNumberValidator,
  string255Validator,
} from "../validation/validators";
import { callGetAddressFromCep, callRegisterAddress } from "./address-api";
import { cepValidator, ufValidator } from "./address-validators";

const requiredString255Validator = string255Validator();

export const useAddressForm = (redirectToOnSuccess) => {
  const logradouroField = useFormField(requiredString255Validator);
  const bairroField = useFormField(requiredString255Validator);
  const cidadeField = useFormField(requiredString255Validator);
  const ufField = useFormField(ufValidator);
  const numeroField = useFormField(positiveNumberValidator);
  const cepField = useFormField(cepValidator);

  const setFields = useCallback(
    (result) => {
      logradouroField.setValue(result.logradouro);
      cidadeField.setValue(result.localidade);
      bairroField.setValue(result.bairro);
      ufField.setValue(result.uf);
    },
    [bairroField, cidadeField, logradouroField, ufField]
  );

  const { openToast, ...rest } = useToast();

  const redirect = useRedirectCallback(redirectToOnSuccess);

  const searchViaCep = useCallback(async () => {
    try {
      const result = await callGetAddressFromCep(cepField.value);
      setFields(result);
    } catch (error) {
      openToast(error.message, TOAST_STATES.ERROR);
    }
  }, [cepField.value, setFields, openToast]);

  const submit = async () => {
    try {
      const address = {
        numero: numeroField.value,
        logradouro: logradouroField.value,
        uf: ufField.value,
        cidade: cidadeField.value,
        bairro: bairroField.value,
        cep: cepField.value,
      };

      await callRegisterAddress(address);
      redirect();
    } catch (error) {
      openToast(error.message, TOAST_STATES.ERROR);
    }
  };

  return {
    ...rest,
    searchViaCep,
    submit,
    logradouroField,
    bairroField,
    cidadeField,
    numeroField,
    ufField,
    cepField,
  };
};
