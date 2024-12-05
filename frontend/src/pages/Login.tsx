import { useState } from "react";
import LoginRightSide from "../components/LoginRightSide";
import ForgotPassword from "../components/ForgotPassword";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  return (
    <div className="flex h-[100vh] flex-row">
      {/* Left Side */}
      <div className="leftside loginbg h-[100%] w-[50%]"></div>
      {/* Right Side */}
      {isLogin && (
        <LoginRightSide
          setIsLogin={setIsLogin}
          setIsForgotPassword={setIsForgotPassword}
        />
      )}
      {isForgotPassword && (
        <ForgotPassword
          setIsLogin={setIsLogin}
          setIsForgotPassword={setIsForgotPassword}
        />
      )}
    </div>
  );
};

export default Login;
