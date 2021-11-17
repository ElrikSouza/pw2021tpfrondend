import {
  isInt,
  maxLengthRule,
  minLengthRule,
  minValueRule,
} from "../../validation/rules";
import { buildValidator } from "../../validation/validator";

export const estoqueValidator = (isRequired = true) =>
  buildValidator(
    [
      isInt("Estoque deve ser um inteiro"),
      minValueRule(0, "Estoque deve ser pelo menos 0"),
    ],
    isRequired
  );

export const precoValidator = (isRequired = true) =>
  buildValidator([minValueRule(0, "Preco deve ser pelo menos 0")], isRequired);

export const nomeValidator = (isRequired = true) =>
  buildValidator(
    [
      minLengthRule(6, "Nome deve ter pelo menos caracteres"),
      maxLengthRule(255, "Nome deve ter ate 255 caracteres"),
    ],
    isRequired
  );
