import React from "react";
import { useState } from "react";
import loginbg from "publicloginbg.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="flex h-[100vh] flex-row">
      <div className="leftside loginbg h-[100%] w-[50%]"></div>
      <div className="flex h-full w-[50%] flex-col items-center justify-center">
        <div>
          <div className="flex w-full flex-row items-center justify-center pb-[7vh]">
            <p className="text-[45px] font-bold text-black">Login</p>
          </div>
          <div className="flex flex-col">
            <div className="flex pb-[7vh]">
              <input
                className="w-full border-b border-b-black pb-[10px] font-medium"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="">
              <input
                className="w-full border-b border-b-black pb-[10px] font-medium"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="forgotpassword mb-[4.5vh] mt-[2vh] flex w-full flex-row justify-center text-[#F58C0AB2]">
            <p>Forgot Password?</p>
          </div>

          <div
            className="flex h-[6.5vh] w-[22vw] flex-row items-center justify-center rounded-[100px] bg-[#F58C0ACC]"
            onClick={handleSubmit}
          >
            <p className="text-white">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
