import React from "react";
import { AppButton } from "../components/button/button";
import { AppInput } from "../components/input/input";

export const SignUpForm = ({ useSignUp }) => {
  const signUp = useSignUp();

  return (
    <div>
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
    </div>
  );
};
