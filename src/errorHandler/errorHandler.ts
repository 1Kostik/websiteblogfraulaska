import axios from "axios";
import { toast } from "react-toastify";

export const handlerAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || "Сталася помилка";
      console.log(`Axios error:${message},статус: ${status}`);
      toast.error("Вам потрібно увійти до системи.");
      throw new Error(message);
    } else if (error.request) {
      console.log("Сервер не відповів:", error.request);
      toast.error("Спробуйте пізніше");
      throw new Error("Сервер не відповів. Спробуйте пізніше.");
    } else {
      console.log("Щось пішло не так при запиті:", error.message);
      toast.error("Сталася невідома помилка");
      throw new Error("Сталася невідома помилка");
    }
  } else {
    console.error("Non-Axios error:", error);
    toast.error("Виникла невідома помилка");
    throw new Error("Виникла невідома помилка");
  }
};
