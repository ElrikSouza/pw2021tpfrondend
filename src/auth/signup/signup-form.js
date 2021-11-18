import React from "react";
import { AppButton } from "../../components/button/button";
import { FormLayout } from "../../components/form-layout/form-layout";
import { AppInput } from "../../components/input/input";
import { Toast } from "../../components/toast/toast";

export const SignUpForm = ({ useSignUp }) => {
  const signUp = useSignUp();

  return (
    <FormLayout>
      <AppInput
        value={signUp.nome}
        onChange={signUp.onChangeNome}
        errors={signUp.nomeErrors}
        isValid={signUp.nomeIsValid}
        placeholder="Nome"
      />

      <AppInput
        value={signUp.email}
        onChange={signUp.onChangeEmail}
        errors={signUp.emailErrors}
        isValid={signUp.emailIsValid}
        placeholder="Email"
      />

      <AppInput
        value={signUp.senha}
        onChange={signUp.onChangeSenha}
        errors={signUp.senhaErrors}
        isValid={signUp.senhaIsValid}
        type="password"
        placeholder="Senha"
      />

      <AppInput
        value={signUp.confirmarSenha}
        onChange={signUp.onChangeConfirmarSenha}
        errors={signUp.confirmarSenhaErrors}
        isValid={signUp.confirmarSenhaIsValid}
        type="password"
        placeholder="Confirmar Senha"
      />

      <AppButton onClick={signUp.submit} disabled={signUp.formDisabled}>
        Fazer Cadastro
      </AppButton>

      <Toast
        handleClose={signUp.toast.handleToastClose}
        isVisible={signUp.toast.isToastVisible}
        msg={signUp.toast.toastMsg}
        state={signUp.toast.toastState}
      />
    </FormLayout>
  );
};
