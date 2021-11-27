import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { TOAST_STATES } from "../../components/toast/toast";
import { useToast } from "../../components/toast/use-toast";
import { useFileUpload } from "../../hooks/use-file-upload";
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
    estoqueField.setValue(Number.parseInt(product.estoque));
    precoField.setValue(Number.parseFloat(product.preco));
    setDefaultValueSet(true);
  });

  const { formDisabled } = useFormDisabled([
    !nomeField.isValid,
    !estoqueField.isValid,
    !precoField.isValid,
  ]);

  const { file: photo, onChange: onChangePhoto } = useFileUpload();

  const submit = async () => {
    try {
      const changes = {
        nome: nomeField.value,
        estoque: estoqueField.value,
        preco: precoField.value,
      };

      if (photo) {
        changes["photo"] = photo;
      }

      await callUpdateProduct(productId, changes);
      navigate(`/products/${productId}`);
    } catch (error) {
      toast.openToast(error.message, TOAST_STATES.ERROR);
    }
  };

  return {
    nomeField,
    estoqueField,
    precoField,
    toast,
    submit,
    formDisabled,
    photo,
    onChangePhoto,
  };
};
