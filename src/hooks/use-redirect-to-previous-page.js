import { useLocationRedirect } from "./use-location-redirect";
import { useRedirectCallback } from "./use-redirect";

export const useRedirectToPreviousPage = () => {
  const redirect = useLocationRedirect();
  const redirectCallBack = useRedirectCallback(redirect);

  return redirectCallBack;
};
