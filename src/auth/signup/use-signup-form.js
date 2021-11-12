import { useEffect, useMemo } from "react";
import { useFormDisabled } from "../../hooks/use-form-disabled";
import { useFormField } from "../../hooks/use-formfield";
import { equalsTo, maxLengthRule, minLengthRule } from "../../validation/rules";
import { buildValidator } from "../../validation/validator";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from "../../validation/validators";

export const useSignUpForm = () => {
  const {
    value: email,
    onChange: onChangeEmail,
    errors: emailErrors,
    isValid: emailIsValid,
    wasTouched: emailWasTouched,
  } = useFormField(emailValidator);

  const {
    value: senha,
    onChange: onChangeSenha,
    errors: senhaErrors,
    isValid: senhaIsValid,
    wasTouched: senhaWasTouched,
  } = useFormField(passwordValidator);

  const confirmPasswordValidator = useMemo(
    () =>
      buildValidator([
        minLengthRule(6, "Senha deve ter ao menos 6 caracteres"),
        maxLengthRule(72, "Senha deve ter ate 72 caracteres"),
        equalsTo("As senhas devem ser iguais", senha),
      ]),
    [senha]
  );

  const {
    value: confirmarSenha,
    onChange: onChangeConfirmarSenha,
    errors: confirmarSenhaErrors,
    isValid: confirmarSenhaIsValid,
    wasTouched: confirmarSenhaWasTouched,
    triggerValidation: revalidateConfimarSenha,
  } = useFormField(confirmPasswordValidator);

  const {
    value: nome,
    onChange: onChangeNome,
    errors: nomeErrors,
    isValid: nomeIsValid,
    wasTouched: nomeWasTouched,
  } = useFormField(nameValidator);

  // Revalidar o campo de confimar senha quando senha muda
  useEffect(() => {
    if (senhaWasTouched && confirmarSenhaWasTouched) {
      revalidateConfimarSenha();
    }
  }, [
    senha,
    senhaWasTouched,
    confirmarSenhaWasTouched,
    revalidateConfimarSenha,
  ]);

  const { formDisabled } = useFormDisabled([
    !senhaWasTouched,
    !emailWasTouched,
    !nomeWasTouched,
    !confirmarSenhaWasTouched,
    !senhaIsValid,
    !emailIsValid,
    !nomeIsValid,
    !confirmarSenhaIsValid,
  ]);

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
