import React from "react";
import logo from "../assets/logo.png";
import useWindowDimensions from "../hooks/windowDimensions";

const AdminNavigation = () => {
  const { height } = useWindowDimensions();
  return (
    <div className="AdminNavigationDashboard flex h-[100%] flex-col items-center justify-between rounded-[24px] pt-[2.3%] text-white">
      <div className="mb-[6.5%] flex h-[15%] flex-col items-center">
        <img
          src={logo}
          height={height * 0.038}
          width={height * 0.038}
          className="rounded-full"
        />
        <div>
          <p className="baloobhaifont text-[48px]">Iyobor</p>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col justify-around">
        <div className="flex flex-1 cursor-pointer items-center hover:rounded-lg hover:bg-[#781539]">
          <p className="poppinsfont ml-[5%] text-[14px] font-semibold">
            Dashboard
          </p>
        </div>
        <div className="flex w-full flex-1 cursor-pointer items-center hover:rounded-lg hover:bg-[#781539]">
          <p className="poppinsfont ml-[5%] text-[14px] font-semibold">
            View members record
          </p>
        </div>
        <div className="flex w-full flex-1 cursor-pointer items-center hover:rounded-lg hover:bg-[#781539]">
          <p className="poppinsfont ml-[5%] text-[14px] font-semibold">
            Transaction Details
          </p>
        </div>
        <div className="flex w-full flex-1 cursor-pointer items-center hover:rounded-lg hover:bg-[#781539]">
          <p className="poppinsfont ml-[5%] text-[14px] font-semibold">
            Final Balance
          </p>
        </div>
        <div className="flex w-full flex-1 cursor-pointer items-center hover:rounded-lg hover:bg-[#781539]">
          <p className="poppinsfont ml-[5%] text-[14px] font-semibold">
            Pay Summmary
          </p>
        </div>
        <div className="flex w-full flex-1 cursor-pointer items-center hover:rounded-lg hover:bg-[#781539]">
          <p className="poppinsfont ml-[5%] text-[14px] font-semibold">
            Monthly breakdown
          </p>
        </div>
      </div>
      <div className="flex h-[15%] flex-col justify-end pb-[5%]">
        <img src={undefined} />
        <p className="poppinsfont text-[14px] font-normal">Logout</p>
      </div>
    </div>
  );
};

export default AdminNavigation;
