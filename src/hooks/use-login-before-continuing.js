import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useRole } from "./use-role";

export const useLoginBeforeContinuing = () => {
  const role = useRole();
  const { pathname } = useLocation();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "GUEST") {
      navigate("/signin", { state: { redirect: pathname } });
    } else if (role !== "LOADING") {
      setAuthenticated(true);
    }
  }, [pathname, role, navigate]);

  return isAuthenticated;
};
