import axios from "axios";
import { getApiPrefix } from "../../helpers/api-prefix";
import { useFormDisabled } from "../../hooks/use-form-disabled";
import { useFormField } from "../../hooks/use-formfield";
import { store } from "../../storage/storage";
import { emailValidator, passwordValidator } from "../../validation/validators";

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
    const result = await axios.post(getApiPrefix() + "signin", {
      email,
      senha,
    });

    const { token } = result.data;

    await store.setItem("token", token);
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
