import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useToast } from "../../components/toast/use-toast";
import { useFormDisabled } from "../../hooks/use-form-disabled";
import { useFormField } from "../../hooks/use-formfield";
import { useResourceId } from "../../hooks/use-resource-id";
import { callUpdateProduct } from "../products-api";
import { useShowProduct } from "../show/use-show-product";
import {
  estoqueValidator,
  nomeValidator,
  precoValidator,
} from "./product-validators";

const optionalNomeValidator = nomeValidator(false);
const optionalEstoqueValidator = estoqueValidator(false);
const optionalPrecoValidator = precoValidator(false);

export const useEditProduct = () => {
  const productId = useResourceId();
  const { product } = useShowProduct(productId);
  const [defaultValueSet, setDefaultValueSet] = useState(false);

  const nomeField = useFormField(optionalNomeValidator);
  const estoqueField = useFormField(optionalEstoqueValidator);
  const precoField = useFormField(optionalPrecoValidator);

  const toast = useToast();
  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (defaultValueSet || product.id !== Number.parseInt(productId)) {
      return;
    }

    nomeField.setValue(product.nome);
    estoqueField.setValue(product.estoque);
    precoField.setValue(product.preco);
    setDefaultValueSet(true);
  });

  const { formDisabled } = useFormDisabled([
    !nomeField.isValid,
    !estoqueField.isValid,
    !precoField.isValid,
  ]);

  const submit = async () => {
    const changes = {
      nome: nomeField.value,
      estoque: estoqueField.value,
      preco: precoField.value,
    };

    await callUpdateProduct(productId, changes);
    navigate(`/products/${productId}`);
  };

  return {
    nomeField,
    estoqueField,
    precoField,
    toast,
    submit,
    formDisabled,
  };
};
