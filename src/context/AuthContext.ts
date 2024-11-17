import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const defaultAuthContext: AuthContextType = {
  isAuthenticated: true,
  setIsAuthenticated: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export default AuthContext;
