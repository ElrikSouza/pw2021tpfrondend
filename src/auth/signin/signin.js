import React from "react";
import { AppButton } from "../../components/button/button";
import { FormLayout } from "../../components/form-layout/form-layout";
import { AppInput } from "../../components/input/input";
import { Toast } from "../../components/toast/toast";
import { useSignIn } from "./use-signin";

export const SignInPage = () => {
  const signIn = useSignIn();

  return (
    <FormLayout>
      <AppInput
        value={signIn.email}
        onChange={signIn.onChangeEmail}
        errors={signIn.emailErrors}
        isValid={signIn.emailIsValid}
        placeholder="Email"
      />

      <AppInput
        value={signIn.senha}
        onChange={signIn.onChangeSenha}
        errors={signIn.senhaErrors}
        isValid={signIn.senhaIsValid}
        placeholder="Senha"
        type="password"
      />

      <AppButton onClick={signIn.submit} disabled={signIn.formDisabled}>
        Fazer Login
      </AppButton>

      <Toast
        handleClose={signIn.handleToastClose}
        isVisible={signIn.isToastVisible}
        msg={signIn.toastMsg}
        state={signIn.toastState}
      />
    </FormLayout>
  );
};
