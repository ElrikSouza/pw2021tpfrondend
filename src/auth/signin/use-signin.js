import { useFormDisabled } from "../../hooks/use-form-disabled";
import { useFormField } from "../../hooks/use-formfield";
import { emailValidator, passwordValidator } from "../../validation/validators";
import { callSignIn } from "../auth-api";

export const useSignIn = () => {
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

  const { formDisabled } = useFormDisabled([
    !emailIsValid,
    !senhaIsValid,
    !emailWasTouched,
    !senhaWasTouched,
  ]);

  const submit = async () => {
    await callSignIn({ email, senha });
  };

  return {
    email,
    onChangeEmail,
    emailErrors,
    emailIsValid,
    senha,
    onChangeSenha,
    senhaErrors,
    senhaIsValid,
    submit,
    formDisabled,
  };
};
