import { useCheckTokenExpiration } from "@hooks/useCheckTokenExpiration";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ClearLocalStorageOnNavigate = () => {
  const checkExpiration = useCheckTokenExpiration();
  const location = useLocation();

  useEffect(() => {
    checkExpiration();
    if (location.pathname !== "/store") {
      localStorage.removeItem("filter");
    }
  }, [location]);

  return null;
};

export default ClearLocalStorageOnNavigate;
