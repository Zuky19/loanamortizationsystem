import React from "react";
import logo from "../public/logo.png";
import useWindowDimensions from "../hooks/windowDimensions";
import { Route, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { height } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 flex-col items-center bg-[#D9D9D9]">
      <div className="flex h-[40vh] items-center justify-center">
        <img
          src={logo}
          className="rounded-full"
          height={height * 0.27}
          width={height * 0.27}
        />
      </div>
      <div className="flex h-[60vh] flex-col items-center">
        <div className="mb-[5vh]">
          <p className="text-[35px] font-semibold italic leading-[67.5px]">
            <span className="text-[#F58C0A]">WELCOME</span> TO IYOBOR
            PROGRESSIVE UNION
          </p>
        </div>
        <div>
          <p className="text-[25px] font-semibold italic">
            <span className="text-[#B1072B8F]">GO!</span> for reliable loan
            solutions
          </p>
        </div>

        <div className="flex flex-1 flex-row items-end gap-[5vw] pb-[8vh]">
          <div
            className="flex h-[6vh] w-[14vw] cursor-pointer items-center justify-center rounded-[10px] bg-[#F58C0AD4] font-semibold text-white"
            onClick={() => navigate("/Login")}
          >
            Login
          </div>
          <div className="flex h-[6vh] w-[14vw] cursor-pointer items-center justify-center rounded-[10px] bg-[#F58C0AD4] font-semibold text-white">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
