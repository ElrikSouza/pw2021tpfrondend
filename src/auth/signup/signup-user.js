import React from "react";
import { SignUpForm } from "./signup-form";
import { useSignUpUser } from "./use-signup-user";

export const SignUpUserPage = () => (
  <div>
    <SignUpForm useSignUp={useSignUpUser} />
  </div>
);
