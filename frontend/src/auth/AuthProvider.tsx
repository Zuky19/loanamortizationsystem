import { createContext, PropsWithChildren, useContext, useState } from "react";
import { login } from "./api/auth";

type AuthContext = {
  currentUser?: User | null;
  handleLogin: (
    username: string,
    password: string,
  ) => Promise<true | undefined>;
  handleLogout: () => Promise<void>;
};

type User = {
  username: string;
  full_name: string;
  role: string;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>();

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await login(username, password);

      console.log(response);
      console.log(response.user);
      const user = response.user as User;
      setCurrentUser(user);
      console.log("User: ", currentUser);
      return true;
    } catch (error) {
      console.error("Login faliled", error);
      setCurrentUser(null);
    }
  };

  const handleLogout = async () => {
    setCurrentUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
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
