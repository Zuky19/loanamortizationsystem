import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUser, login } from "../api/auth";

type AuthContext = {
  currentUser?: User | null;
  handleLogin: (
    username: string,
    password: string,
  ) => Promise<User | undefined>;
  handleLogout: () => Promise<void>;
};

type User = {
  fullname: string;
  username: string;
  role: string;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>();

  useEffect(() => {
    const fetchUser = async () => {
      const savedUser = localStorage.getItem("currentUser");
      if (savedUser) {
        const username = JSON.parse(savedUser).username;
        setCurrentUser(await getUser(username));
        console.log("Restored user from localStorage:", JSON.parse(savedUser));
      }
    };
    fetchUser();
  }, []);

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await login(username, password);

      const user = response?.user;
      console.log(response);
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      console.log("User: ", response.user);
      return response.user;
    } catch (error) {
      console.error("Login faliled", error);
      setCurrentUser(null);
      return undefined;
    }
  };

  const handleLogout = async () => {
    setCurrentUser(null);
    localStorage.removeItem("CurrentUser");
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

  if (context === undefined) {
    throw new Error("useAuth must be used inside of an AuthProvider");
  }
  return context;
};
