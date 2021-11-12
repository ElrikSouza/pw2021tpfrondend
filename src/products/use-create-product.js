import axios from "axios";
import { useEffect, useState } from "react";
import { getApiPrefix } from "../helpers/api-prefix";
import { getAuthorizationHeader } from "../helpers/get-authorization-header";
import { useFormField } from "../hooks/use-formfield";
import {
  nameValidator,
  positiveNumberValidator,
} from "../validation/validators";

export const useCreateProduct = () => {
  const {
    value: nome,
    onChange: onChangeNome,
    errors: nomeErrors,
    isValid: nomeIsValid,
  } = useFormField(nameValidator);

  const {
    value: estoque,
    onChange: onChangeEstoque,
    errors: estoqueErrors,
    isValid: estoqueIsValid,
  } = useFormField(positiveNumberValidator);

  const {
    value: preco,
    onChange: onChangePreco,
    errors: precoErrors,
    isValid: precoIsValid,
  } = useFormField(positiveNumberValidator);

  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    setFormDisabled(!(nomeIsValid && estoqueIsValid && precoIsValid));
  }, [nomeIsValid, estoqueIsValid, precoIsValid]);

  const submit = async () => {
    const authoriaztionHeader = await getAuthorizationHeader();
    const product = { nome, preco, estoque };

    await axios.post(getApiPrefix() + "products", product, authoriaztionHeader);
  };

  return {
    nome,
    onChangeNome,
    nomeErrors,
    nomeIsValid,

    estoque,
    onChangeEstoque,
    estoqueErrors,
    estoqueIsValid,

    preco,
    onChangePreco,
    precoErrors,
    precoIsValid,

    formDisabled,
    submit,
  };
};
