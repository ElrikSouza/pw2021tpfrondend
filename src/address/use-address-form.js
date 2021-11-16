import { useCallback } from "react";
import { TOAST_STATES } from "../components/toast/toast";
import { useToast } from "../components/toast/use-toast";
import { useFormField } from "../hooks/use-formfield";
import { useRedirectCallback } from "../hooks/use-redirect";
import { nameValidator } from "../validation/validators";
import { callGetAddressFromCep, callRegisterAddress } from "./address-api";

export const useAddressForm = (redirectToOnSuccess) => {
  const { value: cep, onChange: onChangeCep } = useFormField(nameValidator);

  const {
    value: logradouro,
    onChange: onChangeLogradouro,
    setValue: setLogradouro,
  } = useFormField(nameValidator);

  const {
    value: bairro,
    onChange: onChangeBairro,
    setValue: setBairro,
  } = useFormField(nameValidator);

  const {
    value: cidade,
    onChange: onChangeCidade,
    setValue: setCidade,
  } = useFormField(nameValidator);

  const {
    value: uf,
    onChange: onChangeUf,
    setValue: setUf,
  } = useFormField(nameValidator);

  const { value: numero, onChange: onChangeNumero } =
    useFormField(nameValidator);

  const setFields = useCallback(
    (result) => {
      setLogradouro(result.logradouro);
      setCidade(result.localidade);
      setBairro(result.bairro);
      setUf(result.uf);
    },
    [setCidade, setUf, setBairro, setLogradouro]
  );

  const { openToast, ...rest } = useToast();

  const redirect = useRedirectCallback(redirectToOnSuccess);

  const searchViaCep = useCallback(async () => {
    try {
      const result = await callGetAddressFromCep(cep);
      setFields(result);
    } catch (error) {
      openToast(error.message, TOAST_STATES.ERROR);
    }
  }, [cep, setFields, openToast]);

  const submit = async () => {
    try {
      const address = { numero, logradouro, uf, cidade, bairro, cep };
      await callRegisterAddress(address);
      redirect();
    } catch (error) {
      openToast(error.message, TOAST_STATES.ERROR);
    }
  };

  return {
    ...rest,
    cep,
    onChangeCep,
    logradouro,
    onChangeLogradouro,
    cidade,
    onChangeCidade,
    bairro,
    onChangeBairro,
    uf,
    onChangeUf,
    numero,
    onChangeNumero,
    searchViaCep,
    submit,
  };
};
