import { AppButton } from "../../components/button/button";
import { FormLayout } from "../../components/form-layout/form-layout";
import { ImageUpload } from "../../components/image-upload/image-upload";
import { AppInput } from "../../components/input/input";
import { Toast } from "../../components/toast/toast";
import { useEditProduct } from "./use-edit-product";

export const EditProduct = () => {
  const editProduct = useEditProduct();

  return (
    <FormLayout>
      <div>Nome</div>
      <AppInput
        placeholder="Nome"
        errors={editProduct.nomeField.errors}
        isValid={editProduct.nomeField.isValid}
        value={editProduct.nomeField.value}
        onChange={editProduct.nomeField.onChange}
      />

      <div>Estoque</div>
      <AppInput
        placeholder="Estoque"
        errors={editProduct.estoqueField.errors}
        isValid={editProduct.estoqueField.isValid}
        value={editProduct.estoqueField.value}
        onChange={editProduct.estoqueField.onChange}
        type="number"
        min="0"
      />

      <div>Preço</div>
      <AppInput
        placeholder="Preço"
        errors={editProduct.precoField.errors}
        isValid={editProduct.precoField.isValid}
        value={editProduct.precoField.value}
        onChange={editProduct.precoField.onChange}
        type="number"
        min="0"
      />

      <ImageUpload
        image={editProduct.photo}
        onChange={editProduct.onChangePhoto}
      />

      <AppButton
        onClick={editProduct.submit}
        disabled={editProduct.formDisabled}
      >
        Salvar modificações
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
