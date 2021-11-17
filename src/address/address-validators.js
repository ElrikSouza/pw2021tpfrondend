import { exactLength, maxLengthRule, minLengthRule } from "../validation/rules";
import { buildValidator } from "../validation/validator";

export const cepValidator = buildValidator([
  minLengthRule(8, "CEP deve ter ao menos 8 caracteres"),
  maxLengthRule(9, "CEP deve ter no maximo 9 caracteres"),
]);

export const ufValidator = buildValidator([
  exactLength(2, "UF deve ter exatamente 2 caracteres"),
]);
