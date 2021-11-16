import React from "react";
import { AppButton } from "../components/button/button";
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
    <div>
      <AppInput
        placeholder="CEP"
        onChange={addressForm.onChangeCep}
        value={addressForm.cep}
      />

      <AppInput
        placeholder="Logradouro"
        onChange={addressForm.onChangeLogradouro}
        value={addressForm.logradouro}
      />

      <AppInput
        placeholder="Cidade"
        onChange={addressForm.onChangeCidade}
        value={addressForm.cidade}
      />

      <AppInput
        placeholder="Bairro"
        onChange={addressForm.onChangeBairro}
        value={addressForm.bairro}
      />

      <AppInput
        placeholder="Uf"
        onChange={addressForm.onChangeUf}
        value={addressForm.uf}
      />

      <AppInput
        placeholder="Numero"
        onChange={addressForm.onChangeNumero}
        value={addressForm.numero}
      />

      <button onClick={addressForm.searchViaCep}>search</button>

      <Toast
        state={addressForm.toastState}
        isVisible={addressForm.isToastVisible}
        handleClose={addressForm.handleToastClose}
        msg={addressForm.toastMsg}
      />

      <AppButton onClick={addressForm.submit}>Cadastrar endereco</AppButton>
    </div>
  );
};
