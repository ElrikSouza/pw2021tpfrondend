import { AppButton } from "../../components/button/button";
import { FormLayout } from "../../components/form-layout/form-layout";
import { AppInput } from "../../components/input/input";
import { Toast } from "../../components/toast/toast";
import { useEditProduct } from "./use-edit-product";

export const EditProduct = () => {
  const editProduct = useEditProduct();

  return (
    <FormLayout>
      <AppInput
        placeholder="Nome"
        errors={editProduct.nomeField.errors}
        isValid={editProduct.nomeField.isValid}
        value={editProduct.nomeField.value}
        onChange={editProduct.nomeField.onChange}
      />

      <AppInput
        placeholder="Estoque"
        errors={editProduct.estoqueField.errors}
        isValid={editProduct.estoqueField.isValid}
        value={editProduct.estoqueField.value}
        onChange={editProduct.estoqueField.onChange}
      />

      <AppInput
        placeholder="Preco"
        errors={editProduct.precoField.errors}
        isValid={editProduct.precoField.isValid}
        value={editProduct.precoField.value}
        onChange={editProduct.precoField.onChange}
      />

      <AppButton
        onClick={editProduct.submit}
        disabled={editProduct.formDisabled}
      >
        Salvar modificacoes
      </AppButton>

      <Toast
        handleClose={editProduct.toast.handleToastClose}
        isVisible={editProduct.toast.isToastVisible}
        msg={editProduct.toast.toastMsg}
        state={editProduct.toast.toastState}
      />
    </FormLayout>
  );
};
