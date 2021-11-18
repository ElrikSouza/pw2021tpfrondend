import { useNavigate } from "react-router";
import { TOAST_STATES } from "../../components/toast/toast";
import { useToast } from "../../components/toast/use-toast";
import { callSignUpUser } from "../auth-api";
import { useSignUpForm } from "./use-signup-form";

export const useSignUpUser = () => {
  const form = useSignUpForm();
  const toast = useToast();
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await callSignUpUser(form);
      navigate("/signin");
    } catch (error) {
      toast.openToast(error.message, TOAST_STATES.ERROR);
    }
  };

  return {
    ...form,
    toast,
    submit,
  };
};
