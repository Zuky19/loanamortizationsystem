import facebook from "../public/dashboard-images/facebook.png";
import instagram from "../public/dashboard-images/instagram.png";
import twitter from "../public/dashboard-images/twitter.png";
import home from "../public/dashboard-images/home.png";

const YearlyLeftSide = () => {
  return (
    <div className="flex h-screen flex-row">
      <div className="mt-[9vh] flex h-full flex-col items-center">
        <div
          className="profileImage flex h-[12.5vw] w-[12.5vw] items-end justify-end rounded-full pb-[20%]"
          style={{ backgroundImage: `${null}`, backgroundColor: "white" }}
        >
          <div className="flex items-center justify-center rounded-full bg-[#1814F3]"></div>
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
      </div>
    </div>
  );
};

export default YearlyLeftSide;
