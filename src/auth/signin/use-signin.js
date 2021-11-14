import { TOAST_STATES } from "../../components/toast/toast";
import { useToast } from "../../components/toast/use-toast";
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

  const { openToast, ...toast } = useToast();

  const submit = async () => {
    try {
      await callSignIn({ email, senha });
    } catch (error) {
      openToast(error.message, TOAST_STATES.ERROR);
    }
  };

  return {
    ...toast,
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
