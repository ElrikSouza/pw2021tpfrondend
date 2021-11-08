import axios from "axios";
import { useEffect, useState } from "react";
import { getApiPrefix } from "../helpers/api-prefix";
import { useFormField } from "../hooks/use-formfield";
import { store } from "../storage/storage";
import { emailValidator, passwordValidator } from "../validation/validators";

export const useSignIn = () => {
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

  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    setFormDisabled(!(emailIsValid && senhaIsValid));
  }, [emailIsValid, senhaIsValid]);

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
