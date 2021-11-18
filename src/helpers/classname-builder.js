const evalConditionalClassName = (key, boolValues, conditionalClasses) => {
  const boolVal = boolValues[key];
  const classes = conditionalClasses[key];

  if (typeof classes == "string") {
    return boolVal ? classes : "";
  }
  const [isTrueClass, isFalseClass] = classes;

  return boolVal ? isTrueClass : isFalseClass;
};

export const classNameBuilder = (baseClass, themes, conditionalClasses) => {
  return (theme, boolValues = {}, extraClasses = "") => {
    const classNames = [baseClass, extraClasses];

    classNames.push(themes[theme]);

    for (const boolValueKey of Object.keys(boolValues)) {
      if (conditionalClasses[boolValueKey]) {
        const className = evalConditionalClassName(
          boolValueKey,
          boolValues,
          conditionalClasses
        );

        classNames.push(className);
      }
    }

    return classNames.join(" ");
  };
};
