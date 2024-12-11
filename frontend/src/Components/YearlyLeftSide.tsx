import facebook from "../public/dashboard-images/facebook.png";
import instagram from "../public/dashboard-images/instagram.png";
import twitter from "../public/dashboard-images/twitter.png";
import home from "../public/dashboard-images/home.png";
import pencil from "../public/dashboard-images/pencil.png";
import { useState } from "react";

const YearlyLeftSide = () => {
  const [editUserModal, setEditModal] = useState(false);

  const handleEditUser = () => {
    setEditModal(true);
  };

  return (
    <div className="flex h-full w-[15%] flex-col items-center">
      <div
        className="profileImage mt-[9vh] flex h-[12.5vw] w-[12.5vw] items-end justify-end rounded-full pb-[20%]"
        style={{ backgroundImage: `${null}`, backgroundColor: "white" }}
      >
        <div
          className="flex h-[3vh] w-[3vh] cursor-pointer items-center justify-center rounded-full bg-[#1814F3]"
          onClick={handleEditUser}
        >
          <img src={pencil} className="h-[50%] w-[50%]" />
        </div>
      </div>
      <div className="mb-[3vh] mt-[3vh]">
        <p className="font-bold">Iyobor Progressive Union</p>
      </div>
      <div className="mb-[8vh] flex w-full flex-row justify-between px-[20%]">
        <img src={home} />
        <p className="text-[#F58C0A]">Dashboard</p>
      </div>
      <div>
        <p className="mb-[3vh] font-bold">Contact Us</p>
      </div>
      <div className="mb-[3.7vh] flex h-[4.5%] w-full flex-row justify-evenly">
        <img src={facebook} />
        <img src={instagram} />
        <img src={twitter} />
      </div>
      <div className="flex h-[3.6vh] w-[11.21vw] items-center justify-center bg-[#F58C0AD4] text-[14px] font-bold text-white">
        <p>Back</p>
      </div>
    </div>
  );
};

export default YearlyLeftSide;
