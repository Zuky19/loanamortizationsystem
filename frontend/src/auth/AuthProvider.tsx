import { createContext, PropsWithChildren, useContext, useState } from "react";
import { login } from "./api/auth";

type AuthContext = {
  authToken?: string | null;
  currentUser?: string | null;
  handleLogin: (username: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>();
  const [currentUser, setCurrentUser] = useState<string | null>();

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await login(username, password);
      const { authToken, user } = response[1];

      setAuthToken(authToken);
      setCurrentUser(user);
    } catch {
      setAuthToken(null);
      setCurrentUser(null);
    }
  };

  const handleLogout = async () => {
    setAuthToken(null);
    setCurrentUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        authToken: authToken,
        currentUser: currentUser,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context == undefined) {
    throw new Error("useAuth must be used inside of an AuthProvider");
  }
  return context;
};
