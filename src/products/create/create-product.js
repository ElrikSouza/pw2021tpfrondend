import React from "react";
import { AppButton } from "../../components/button/button";
import { FormLayout } from "../../components/form-layout/form-layout";
import { ImageUpload } from "../../components/image-upload/image-upload";
import { AppInput } from "../../components/input/input";
import { useCreateProduct } from "./use-create-product";

export const CreateProductPage = () => {
  const createProduct = useCreateProduct();

  return (
    <FormLayout>
      <AppInput
        value={createProduct.nome}
        onChange={createProduct.onChangeNome}
        isValid={createProduct.nomeIsValid}
        errors={createProduct.nomeErrors}
        placeholder="Nome"
      />

      <AppInput
        value={createProduct.preco}
        onChange={createProduct.onChangePreco}
        isValid={createProduct.precoIsValid}
        errors={createProduct.precoErrors}
        type="number"
        min="0"
        placeholder="Preco"
      />

      <AppInput
        value={createProduct.estoque}
        onChange={createProduct.onChangeEstoque}
        isValid={createProduct.estoqueIsValid}
        errors={createProduct.estoqueErrors}
        type="number"
        min="0"
        placeholder="Estoque"
      />

      <ImageUpload
        image={createProduct.photo}
        onChange={createProduct.onChangePhoto}
      />

      <AppButton
        onClick={createProduct.submit}
        disabled={createProduct.formDisabled}
      >
        Fazer cadastro
      </AppButton>
    </FormLayout>
  );
};
