import { useEffect, useState } from "react";
import { useFormField } from "../hooks/use-formfield";
import { equalsTo, maxLengthRule, minLengthRule } from "../validation/rules";
import { buildValidator } from "../validation/validator";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from "../validation/validators";

export const useSignUpForm = () => {
  const {
    value: email,
    onChange: onChangeEmail,
    errors: emailErrors,
    isValid: emailIsValid,
  } = useFormField(emailValidator);

  const {
    value: senha,
    onChange: onChangeSenha,
    errors: senhaErrors,
    isValid: senhaIsValid,
  } = useFormField(passwordValidator);

  const confirmPasswordValidator = buildValidator([
    minLengthRule(6, "Senha deve ter ao menos 6 caracteres"),
    maxLengthRule(72, "Senha deve ter ate 72 caracteres"),
    equalsTo("As senhas devem ser iguais", () => senha),
  ]);

  const {
    value: confirmarSenha,
    onChange: onChangeConfirmarSenha,
    errors: confirmarSenhaErrors,
    isValid: confirmarSenhaIsValid,
  } = useFormField(confirmPasswordValidator);

  const {
    value: nome,
    onChange: onChangeNome,
    errors: nomeErrors,
    isValid: nomeIsValid,
  } = useFormField(nameValidator);

  const [formDisabled, setFormDisabled] = useState(false);

  // Revalidar o campo de confimar senha quando senha muda
  useEffect(() => {
    if (senha === confirmarSenha && senha === "") {
      return;
    }

    onChangeConfirmarSenha({ target: { value: confirmarSenha } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [senha]);

  useEffect(() => {
    setFormDisabled(
      !(nomeIsValid && senhaIsValid && confirmarSenhaIsValid && emailIsValid)
    );
  }, [nomeIsValid, senhaIsValid, confirmarSenhaIsValid, emailIsValid]);

  return {
    email,
    onChangeEmail,
    emailErrors,
    emailIsValid,
    senha,
    onChangeSenha,
    senhaErrors,
    senhaIsValid,
    confirmarSenha,
    confirmarSenhaIsValid,
    onChangeConfirmarSenha,
    confirmarSenhaErrors,
    nome,
    nomeIsValid,
    onChangeNome,
    nomeErrors,
    formDisabled,
  };
};
