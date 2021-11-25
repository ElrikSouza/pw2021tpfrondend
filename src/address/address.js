import React from "react";
import { AppButton } from "../components/button/button";
import { FormLayout } from "../components/form-layout/form-layout";
import { AppInput } from "../components/input/input";
import { Toast } from "../components/toast/toast";
import { useLocationRedirect } from "../hooks/use-location-redirect";
import { useRoleGuard } from "../hooks/use-role-guard";
import { useAddressForm } from "./use-address-form";

export const AddressForm = () => {
  const redirect = useLocationRedirect();
  const addressForm = useAddressForm(redirect);
  useRoleGuard(["ADM", "USER"]);

  return (
    <FormLayout>
      <AppInput
        placeholder="CEP"
        onChange={addressForm.cepField.onChange}
        value={addressForm.cepField.value}
        isValid={addressForm.cepField.isValid}
        errors={addressForm.cepField.errors}
      />

      <AppInput
        placeholder="Logradouro"
        onChange={addressForm.logradouroField.onChange}
        value={addressForm.logradouroField.value}
        isValid={addressForm.logradouroField.isValid}
        errors={addressForm.logradouroField.errors}
      />

      <AppInput
        placeholder="Cidade"
        onChange={addressForm.cidadeField.onChange}
        value={addressForm.cidadeField.value}
        isValid={addressForm.cidadeField.isValid}
        errors={addressForm.cidadeField.errors}
      />

      <AppInput
        placeholder="Bairro"
        onChange={addressForm.bairroField.onChange}
        value={addressForm.bairroField.value}
        isValid={addressForm.bairroField.isValid}
        errors={addressForm.bairroField.errors}
      />

      <AppInput
        placeholder="Uf"
        onChange={addressForm.ufField.onChange}
        value={addressForm.ufField.value}
        isValid={addressForm.ufField.isValid}
        errors={addressForm.ufField.errors}
      />

      <AppInput
        placeholder="Numero"
        type="number"
        min="0"
        onChange={addressForm.numeroField.onChange}
        value={addressForm.numeroField.value}
        isValid={addressForm.numeroField.isValid}
        errors={addressForm.numeroField.errors}
      />

      <AppButton onClick={addressForm.searchViaCep}>
        Procurar pelo CEP
      </AppButton>

      <Toast
        state={addressForm.toastState}
        isVisible={addressForm.isToastVisible}
        handleClose={addressForm.handleToastClose}
        msg={addressForm.toastMsg}
      />

      <AppButton onClick={addressForm.submit}>Cadastrar endereco</AppButton>
    </FormLayout>
  );
};
