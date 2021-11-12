import { useEffect, useState } from "react";
import { useFormField } from "../../hooks/use-formfield";
import {
  nameValidator,
  positiveNumberValidator,
} from "../../validation/validators";
import { callCreateProduct } from "../products-api";

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
    const product = { nome, preco, estoque };

    await callCreateProduct(product);
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