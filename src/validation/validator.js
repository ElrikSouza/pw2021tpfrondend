export const buildValidationRule = (rule, errorMessage) => {
  return (value) => {
    if (!rule(value)) {
      return errorMessage;
    }
    return null;
  };
};

export const buildValidator = (rules, isRequired = true) => {
  return (value) => {
    if (value == null || value === "") {
      return isRequired ? ["Valor nulo em um campo obrigatorio."] : [];
    }

    const errors = [];
    for (const validationRule of rules) {
      const result = validationRule(value);

      if (result != null) {
        errors.push(result);
      }
    }
    return errors;
  };
};
