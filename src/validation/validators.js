import {
  isEmailRule,
  maxLengthRule,
  minLengthRule,
  minValueRule,
} from "./rules";
import { buildValidator } from "./validator";

export const passwordValidator = buildValidator([
  minLengthRule(6, "Senha deve ter ao menos 6 caracteres."),
  maxLengthRule(72, "Nome pode ter ate 72 caracteres."),
]);

export const nameValidator = buildValidator([
  minLengthRule(6, "Nome deve ter ao menos 6 caracteres."),
  maxLengthRule(100, "Nome pode ter ate 100 caracteres."),
]);

export const emailValidator = buildValidator([
  maxLengthRule(255, "Email pode ter apenas ate 255 caracteres"),
  isEmailRule("Email invalido"),
]);

export const positiveNumberValidator = buildValidator([
  minValueRule(0, "O numero deve ser positivo"),
]);
