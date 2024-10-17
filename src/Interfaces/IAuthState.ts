export interface IAuthState {
  token: string | null;
  expirationTime: number | null;
  username: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}
