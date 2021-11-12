import { SignUpForm } from "./signup-form";
import { useSignUpCollab } from "./use-signup-collab";

export const SignUpCollaboratorPage = () => (
  <div>
    <SignUpForm useSignUp={useSignUpCollab} />
  </div>
);
