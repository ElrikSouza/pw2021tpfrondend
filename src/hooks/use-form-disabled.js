/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const orReduce = (bools) => {
  for (const bool of bools) {
    if (bool) {
      return true;
    }
  }

  return false;
};

export const useFormDisabled = (booleanDependencies) => {
  const [formDisabled, setFormDisable] = useState(true);

  useEffect(() => {
    const result = orReduce(booleanDependencies);
    setFormDisable(result);
  }, booleanDependencies);

  return { formDisabled };
};
