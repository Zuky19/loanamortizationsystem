import React, { Dispatch, SetStateAction, useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import backarrow from "../public/backarrow.svg";

interface loginType {
  username: string;
  password: string;
}

interface LoginRightSideProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  setIsForgotPassword: Dispatch<SetStateAction<boolean>>;
}

const LoginRightSide = ({
  setIsLogin,
  setIsForgotPassword,
}: LoginRightSideProps) => {
  const [failedLogin, setFailedLogin] = useState(false);
  const handleSubmit = async () => {
    if (!loginData.username || loginData.username.length < 3) {
      alert("Username must be at least 3 characters");
      return;
    }
    if (!loginData.password || loginData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    try {
      const user = await handleLogin(loginData.username, loginData.password);
      if (user) {
        console.log(user);
        if (user && user.role === "admin") {
          navigate("/admin");
          return;
        }
        if (user && user.role === "user") {
          navigate("/home");
          return;
        }
      }
      setFailedLogin(true);
    } catch (error) {
      console.error(error);
    }
  };
  const handleForgotPassword = () => {
    setIsLogin(false);
    setIsForgotPassword(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const navigate = useNavigate();

  const { handleLogin } = useAuth();
  const [loginData, setLoginData] = useState<loginType>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (failedLogin) {
      setFailedLogin(false);
    }

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex h-full w-[50%] flex-col items-center justify-center">
      <div>
        <div className="flex w-full cursor-pointer flex-row justify-start">
          <img
            src={backarrow}
            alt="backarrow"
            height={20}
            width={20}
            onClick={() => navigate("/home")}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-center pb-[7vh]">
          <p className="text-[45px] font-bold text-black">Login</p>
        </div>
        <div className="flex flex-col">
          {failedLogin && (
            <p className="text-red-500">Username or Password is incorrect</p>
          )}
          <div className="flex-col pb-[7vh]">
            <input
              className="w-full border-b border-b-black pb-[10px] font-medium invalid:border-red-500 focus:outline-none"
              placeholder="Username"
              value={loginData.username}
              name="username"
              onChange={(e) => handleInputChange(e)}
              minLength={3}
              onKeyDown={(e) => handleKeyPress(e)}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="w-full border-b border-b-black pb-[10px] font-medium invalid:border-red-500 focus:outline-none"
              placeholder="Password"
              value={loginData.password}
              name="password"
              onChange={(e) => handleInputChange(e)}
              type="password"
              minLength={8}
              onKeyDown={(e) => handleKeyPress(e)}
            />
          </div>
        </div>
        <div className="forgotpassword mb-[4.5vh] mt-[2vh] flex w-full flex-row justify-center text-[#F58C0AB2]">
          <p className="cursor-pointer" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
        </div>

        <div
          className="flex h-[6.5vh] w-[22vw] cursor-pointer flex-row items-center justify-center rounded-[100px] bg-[#F58C0ACC]"
          onClick={handleSubmit}
        >
          <p className="text-white">Login</p>
        </div>
      </div>
    </div>
  );
};

export default LoginRightSide;
