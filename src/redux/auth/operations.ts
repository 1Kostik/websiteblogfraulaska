import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticateUser } from "@services/servicesApi";
import { AxiosError } from "axios";
import { LoginError } from "Interfaces/IloginError";

export const authUser = createAsyncThunk<
  { token: string; name: string; expirationTime: number },
  { email: string; password: string },
  { rejectValue: LoginError }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const data = await authenticateUser(email, password);

    return data;
  } catch (err) {
    const error = err as AxiosError<LoginError>;
    return thunkAPI.rejectWithValue({
      errorMessage: error.message || "Невідома помилка",
    });
  }
});
