import { TOAST_STATES } from "../../components/toast/toast";
import { useToast } from "../../components/toast/use-toast";
import { callSignUpCollaborator } from "../auth-api";
import { useSignUpForm } from "./use-signup-form";

export const useSignUpCollab = () => {
  const form = useSignUpForm();
  const { openToast, ...toast } = useToast();

  const submit = async () => {
    try {
      await callSignUpCollaborator(form);
      openToast("Colaborador foi cadastrado", TOAST_STATES.INFO);
    } catch (error) {
      openToast(error.message, TOAST_STATES.ERROR);
    }
  };

  return {
    ...form,
    toast,
    submit,
  };
};
