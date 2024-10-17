import { clearToken } from "@redux/auth/slice";
import { useDispatch } from "react-redux";

export function useCheckTokenExpiration() {
  const dispatch = useDispatch();

  const checkExpiration = () => {
    const storedExpirationDate = localStorage.getItem("expirationDate");

    if (storedExpirationDate) {
      try {
        const currentTime = new Date().getTime();
        if (currentTime >= Number(storedExpirationDate)) {
          dispatch(clearToken());
          localStorage.removeItem("expirationDate");
        }
      } catch (error) {
        console.error("Ошибка при проверке времени истечения токена:", error);
      }
    }
  };

  return checkExpiration;
}
