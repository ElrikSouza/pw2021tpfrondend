import { useParams } from "react-router";

export const useResourceId = (parameterName = "id") => {
  const params = useParams();

  return params[parameterName];
};
