import { buildValidationRule } from "./validator";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const maxLengthRule = (maxLength, errorMsg) => {
  return buildValidationRule((value) => value.length <= maxLength, errorMsg);
};

export const minLengthRule = (minLength, errorMsg) => {
  return buildValidationRule((value) => value.length >= minLength, errorMsg);
};

export const isEmailRule = (errorMsg) => {
  return buildValidationRule((value) => emailRegex.test(value), errorMsg);
};

export const equalsTo = (errorMsg, source) => {
  return buildValidationRule((value) => value === source, errorMsg);
};

export const minValueRule = (minValue, errorMsg) => {
  return buildValidationRule((value) => value >= minValue, errorMsg);
};
