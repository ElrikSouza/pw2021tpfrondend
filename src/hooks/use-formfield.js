import { useCallback, useEffect, useState } from "react";

export const useFormFieldWithoutValidation = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const [wasTouched, setWasTouched] = useState(false);

  const onChange = ({ target }) => {
    setValue(target.value);
    if (!wasTouched) {
      setWasTouched(true);
    }
  };

  return {
    value,
    setValue,
    onChange,
    wasTouched,
  };
};

export const useFormField = (validator, defaultValue = "") => {
  const [errors, setErrors] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const { value, wasTouched, ...rest } =
    useFormFieldWithoutValidation(defaultValue);

  const triggerValidation = useCallback(() => {
    const errors = validator(value);
    setErrors(errors);
    setIsValid(errors.length === 0);
  }, [value, setErrors, setIsValid, validator]);

  useEffect(() => {
    if (wasTouched) {
      triggerValidation();
    }
  }, [value, wasTouched, triggerValidation]);

  return { value, wasTouched, errors, isValid, triggerValidation, ...rest };
};
