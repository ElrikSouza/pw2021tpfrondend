import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useRole } from "./use-role";

export const useRoleGuard = (allowedRoles = []) => {
  const navigate = useNavigate();
  const userRole = useRole();

  useEffect(() => {
    if (allowedRoles.includes(userRole) || userRole === "LOADING") {
      return;
    }

    if (userRole === "GUEST" && allowedRoles.includes("USER")) {
      navigate("/guest-forbidden");
    } else if (allowedRoles === ["ADM"]) {
      navigate("/collab-only");
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRole, navigate]);
};
